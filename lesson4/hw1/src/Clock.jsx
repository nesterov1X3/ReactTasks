import React, { Component } from 'react';
import './clock.scss'
// import moment from 'moment';
// import  {getTimeWithOffset} from './getTime.js'
// import { getTrueFromat} from './getTime.js'


export  const  getTimeWithOffset = offset =>{
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset()/60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

// export const getTrueFromat = (date) => {
//   return moment(date).format('HH:mm:ss');
// }

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: props.city,
            offset: props.timeLocal,
            time:getTimeWithOffset(props.timeLocal).toLocaleTimeString('en-US')
        }
        setInterval(() => {
            this.setState({
                time:getTimeWithOffset(this.state.offset).toLocaleTimeString('en-US',{ timeZone: 'UTC'})
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
                {this.state.time}
            </div>
        </div>
        ) 
    }
}

export default Clock;