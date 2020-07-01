import React from 'react';
import Online from './Online.jsx'
import Offline from './Offline.jsx'


class Status extends React.Component {
    constructor(props){
        super(props)

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
            isOnlineForm: false
        })
    }


    render(){
        if(this.state.isOnlineForm){
            return <Online />
        }
        return  <Offline />
    }
}


export default Status;