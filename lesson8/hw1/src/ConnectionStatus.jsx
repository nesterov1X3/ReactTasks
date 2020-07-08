import React from 'react'
// in componentDidMount add 2 event
//update state
//add border to offline
//clear onMount
class ConnectionStatus extends React.Component {
        state = {
            status: online
        }
    
    

    componentDidMount(){
        const { online, offline } = window;

        window.addEventListener('offline', this.statusInternetOf)
        window.addEventListener('online', this.statusInternetOn)
    }

    statusInternetOf(){
        this.setState({
            status: offline
        })
    }

    statusInternetOn(){
        this.setState({
            status: online
        })
    }
    
    render() {
        return (<div className="status status_offline">{this.state.status}</div>)
    }
}

export default ConnectionStatus;