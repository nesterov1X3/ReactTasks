//найти кнопки и тайтл
// записать в консруктор

import React from 'react';

const Message = ({text}) => {
    if (!text){
        return null
    }
    return (
        <div className="message">
            {text}
        </div>
    )
}

export default Message;