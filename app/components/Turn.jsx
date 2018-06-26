import React from 'react'
import {turn_info} from './Info'
import $ from 'jquery'
require('./Turn.css')

class Turn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoad: 0,
            buttonState: 1,
            s: 0,
            sl: 0,
            btn1: "Rolling······",
            btn3: "Rolling······",
            btnDisable: true
        },
        this.buttonChange = this.buttonChange.bind(this);
        this.buttonChange2 = this.buttonChange2.bind(this);
        this.startChange = this.startChange.bind(this);
    }
    
    componentDidMount(){
        this.startChange();        
    }

    startChange() {
        this.setState({
          buttonState: 1
        })

        this.state.s = setInterval(() => {
            var random = Math.ceil(Math.random() * 50);
            this.setState({
                "isLoad": random
            })
        }, 100);

        setTimeout(() => {
            clearInterval(this.state.s)
            this.setState({
                btn1: "辣鸡就吃一个菜点这个",
                btn3: "来自大胃王的素质三连",
                buttonState: 0,
                btnDisable: false
            })
        }, 2500);
        
    }

    buttonChange() {
        this.setState({
          btn1: "Rolling······",
          btn3: "Rolling······",
          btnDisable: true
        })
        if (this.state.buttonState === 1){
            var info = document.getElementsByTagName("div")[1].innerText;
            var apdinfo = document.createElement('h4')
            apdinfo.innerText = info 
            document.body.appendChild(apdinfo)
            if (this.state.sl === 0) {
                clearInterval(this.state.s)
                this.setState( {buttonState : 0} )
            }
        }else {
            this.startChange()
        }
        
        //success
        // $.post('http://192.168.4.13:8080/DRGs/OverAllSituationCtr/testajax',
        // {"info": 123,"rgoCode":456} , function (data) {
        //     console.log("data:" + data);
        // })
    }

    buttonChange2() {
        this.setState({
            btn1: "Rolling······",
            btn3: "Rolling······",
            sl: 1,
            btnDisable: true
        })
        this.startChange()
        setTimeout(() => {
          this.buttonChange();
        }, 800)
        setTimeout(()=>{
            this.buttonChange();
        }, 1600)
        setTimeout(() => {
          this.buttonChange();
        }, 2400)
        setTimeout(() => {
          this.state.sl = 0
        }, 2500)
    }

    render(){
        var isLoads = this.state.isLoad;
        var btn1 = this.state.btn1;
        var btn3 = this.state.btn3;
        var btnD = this.state.btnDisable;
        return(
            <main>
                {
                    turn_info.map((e)=>{
                        if(e.index === isLoads)
                            return <div className="turnDiv" key={e.index}>{e.value}</div>
                    })
                }
              <br/>  
            <button disabled={btnD} onClick={this.buttonChange}>{btn1}</button>
            <button disabled={btnD} onClick={this.buttonChange2}>{btn3}</button>
           </main>
        );      
    }
}

export default Turn