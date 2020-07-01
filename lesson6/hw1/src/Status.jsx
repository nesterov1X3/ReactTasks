import React from 'react';
import Online from './Online.jsx'
import Offline from './Offline.jsx'


class Status extends React.Component {
    constructor(props){
        super(props)


    }
   

    render(){
        if(this.props.isOnline){
            return <Online/>
        }
        return  <Offline />
    }
}


export default Status;