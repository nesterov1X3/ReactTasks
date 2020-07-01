import React from 'react';

const Offline = (props) => {
    const onOffline = props.onOffline
    return (
        <div className="status">
            <span className="status__text" >Offline</span>
            <button className="status__btn" onClick={onOffline}>Reconnect</button>
        </div>
    )
}


export default Offline;