import React, { useState, useEffect } from 'react'
// in componentDidMount add 2 event
//update state
//add border to offline
//clear onMount
const ConnectionStatus = () => {
    const [status, setConecting] = useState('online')

    useEffect(() => {

        const statusInternetOf = (e) => {
            const { offline } = e.target;
            setOffline(offline)
        }

        const setOffline = (status) => {
            setConecting(status = "offline")

        }
        //for online
        const statusInternetOn = (e) => {
            const { online } = e.target;
            this.setOnline(online)
        }

        const setOnline = (status) => {
            setConecting(status = "online")

        }
        //clear

        window.addEventListener('offline', statusInternetOf)
        window.addEventListener('online', statusInternetOn)
        return () => {
            window.removeEventListener('offline', statusInternetOf)
            window.removeEventListener('online', statusInternetOn)
        }
    }, [])
    const changeClassName = (status) => `status ${status === "offline" ? "status_offline" : ""}`;
    return <div className={changeClassName(status)}>{status}</div>;
}


// class ConnectionStatus extends React.Component {
//         state = {
//             status: "online"
//         }

//     componentDidMount(){
//         // const { online, offline } = window;

//         window.addEventListener('offline', this.statusInternetOf)
//         window.addEventListener('online', this.statusInternetOn)

//     }

//     componentWillUnmount() {
//         window.removeEventListener('offline', this.statusInternetOf)
//         window.removeEventListener('online', this.statusInternetOn)
//     }

// //for offline
//     statusInternetOf= (e) => {
//         const {  offline } = e.target;
//         this.setOffline(offline)
//     }

//     setOffline = (status) => {
//         this.setState({
//             status: "offline"
//         })
//     }
// //for online
//     statusInternetOn =(e) => {
//         const { online } = e.target;
//         this.setOnline(online)
//     }

//     setOnline = (status) => {
//         this.setState({
//             status: "online"
//         })
//     }

//     //clear
//     changeClassName = (status) => `status ${status === "offline" ? "status_offline" : ""}`;

//     render() {
//         return <div className={this.changeClassName(this.state.status)}>{this.state.status}</div>;
//         // if(this.state.status == "online"){
//         //     return (<div className="status">{this.state.status}</div>)
//         // } else{
//         //     return (<div className="status status_offline">{this.state.status}</div>)
//         // }
//     }
// }

export default ConnectionStatus;