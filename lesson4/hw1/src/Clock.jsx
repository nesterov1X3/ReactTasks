import React, { Component } from 'react';
import './clock.scss'
import  {getTimeWithOffset} from './getTime.js'
import { getTrueFromat} from './getTime.js'

// const finalTime = getTrueFromat(getTimeWithOffset(3))

class Clock extends Component {
    constructor(props){
        super()
        this.state = {
            location: props.city,
            offset: props.time,
            time:getTrueFromat(getTimeWithOffset(3))
        }
        setInterval(() => {
            this.setState({
                time: this.state.time //что то нужно добавить
            })
        },1000)
    }
    render() {
        return (
        <div className="clock">
            <div className="clock__location">
                {this.state.location}
            </div>
            <div className="clock__time">
                {this.state.time}
            </div>
        </div>
        ) 
    }
}

export default Clock;