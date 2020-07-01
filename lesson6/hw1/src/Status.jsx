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
            isOnlineForm: true
        })
    }
    isOffline = () => {
        this.setState({
            isOnlineForm: false
        })
    }


    render(){
        if(this.isOnlineForm){
            return <Online />
        }
        
        return  <Offline onOffline={this.isOffline}/>
    }
}


export default Status;