import React from 'react'
// in componentDidMount add 2 event
//update state
//add border to offline
//clear onMount
class ConnectionStatus extends React.Component {
        state = {
            status: "online"
        }
    
    

    componentDidMount(){
        // const { online, offline } = window;

        window.addEventListener('offline', this.statusInternetOf)
        window.addEventListener('online', this.statusInternetOn)

       
    }
    
//for offline
    statusInternetOf= (e) => {
        const {  offline } = e.target;
        this.setOffline(offline)
    }

    setOffline = (status) => {
        this.setState({
            status: "offline"
        })
    }
//for online
    statusInternetOn =(e) => {
        const { online } = e.target;
        this.setOnline(online)
    }

    setOnline = (status) => {
        this.setState({
            status: "online"
        })
    }

    //clear
    componentWillUnmount() {
        window.addEventListener('offline', this.statusInternetOf)
        window.addEventListener('online', this.statusInternetOn)
    }
    
    render() {
        return (<div className="status status_offline">{this.state.status}</div>)
    }
}

export default ConnectionStatus;