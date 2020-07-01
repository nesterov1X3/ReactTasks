import React from 'react';
import Online from './Online.jsx'
import Offline from './Offline.jsx'


class Status extends React.Component {
    constructor(props){
        super()

        this.state = {
            isOnlineForm: true
        }
    }
    isOnline = () => {
        this.setState({
            isOnlineForm: false
        })
    }
    isOffline = () => {
        this.setState({
            isOnlineForm: true
        })
    }


    render(){
        if(this.isOnline){
            return <Online />
        }
        
        return  <Offline onOffline={this.isOffline}/>
    }
}


export default Status;