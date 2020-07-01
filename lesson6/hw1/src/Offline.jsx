import React from 'react';

const Offline = () => {
    // const onOffline = props.onOffline
    return (
        <div className="status">
            <span className="status__text" >Offline</span>
            <button className="status__btn" >Reconnect</button>
        </div>
    )
}


export default Offline;