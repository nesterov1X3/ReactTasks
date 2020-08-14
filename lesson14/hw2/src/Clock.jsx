import React, { Component, useState, useEffect } from 'react'
import moment from "moment";

export  const  getTimeWithOffset = offset =>{
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset()/60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}


const Clock = ({location, offset}) => {
    
    const [data, setData] = useState(
        moment(getTimeWithOffset(offset)).format("h:mm:ss A")
    )
    
    useEffect(() => {
       const interaval = setInterval(() => {  
            setData(moment(getTimeWithOffset(offset)).format("h:mm:ss A"));
        }, 1000)
       return () => {
        clearInterval(interaval)
       }
    }, [offset, location]);
    
    // let {  date } = data;
    return (
        <div className="clock">
            <div className="clock__location">
                {location}
            </div>
            <div className="clock__time">
                {data}
            </div>
        </div>
    )
}



// class Clock extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             location: props.city,
//             offset: props.offset,
//             date: getTimeWithOffset(this.props.offset)
//         }
//     }
//     componentDidMount() {
//         this.interaval = setInterval(() => {
//             this.setState({
//                 date: getTimeWithOffset(this.props.offset)
//             })
//         }, 1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.interaval)
//     }


//     render() {
//         return (
//             <div className="clock">
//                 <div className="clock__location">
//                     {this.props.location}
//                 </div>
//                 <div className="clock__time">
//                     {this.state.date.toLocaleTimeString()}
//                 </div>
//             </div>
//         )
//     }
// }


export default Clock;

