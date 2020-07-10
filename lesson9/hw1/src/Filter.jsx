import React from 'react';


const Filter = ({ filterText, count, onChange, value }) => {
    return (
        <div className="filter">
            <span className="filter__count">{count}</span>
            <input type="text" className="filter__input" value={value} onChange={onChange}/>
        </div>
    )
}

export default Filter;