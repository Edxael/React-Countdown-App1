import React, { Component } from 'react';
import './style.css';

class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hour: 0,
            minu: 0,
            seco: 0
        }
    }


    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline){

        const time = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours   = Math.floor(time/(1000*60*60)%24);
        const days    = Math.floor(time/(1000*60*60*24));

        console.log(days, minutes, hours, seconds);
        this.setState({days, hours, minutes, seconds});
    }


    render(){
        return (
            <div className="clock-cont">
                <div className="clock c-d" id="i-day">{this.leading0(this.state.days)} days</div>
                <div className="clock c-h" id="i-hrs">{this.leading0(this.state.hours)} hrs</div>
                <div className="clock c-m" id="i-min">{this.leading0(this.state.minutes)} min</div>
                <div className="clock c-s" id="i-sec">{this.leading0(this.state.seconds)} sec</div>
            </div>
        )
    }
}

export default Clock;
