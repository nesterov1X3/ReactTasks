import React from 'react';
import Online from './Online.jsx'
import Offline from './Offline.jsx'


class Status extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isOnline: false
        }
    }
    // isOnline = () => {
    //     this.setState({
    //         isOnline: false
    //     })
    // }
    // isOffline = () => {
    //     this.setState({
    //         isOnlisOnlineineForm: false
    //     })
    // }


    render(){
        if(this.state.isOnline){
            return <Online />
        }
        return  <Offline />
    }
}


export default Status;