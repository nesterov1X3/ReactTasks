import React, { Component } from 'react';
import './clock.scss'

export  const  getTimeWithOffset = offset =>{
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset()/60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: props.city,
            offset: props.offset,
            date:getTimeWithOffset(this.props.offset)
        }
        setInterval(() => {
            this.setState({
                date: getTimeWithOffset(this.props.offset)
            })
        },1000)
    }
    render() {
        return (
            
        <div className="clock">
            <div className="clock__location">
                {this.props.location}
            </div>
            <div className="clock__time">
                    {this.state.date.toLocaleTimeString()}
                </div>
        </div>
        ) 
    }
}

export default Clock;