import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './search.scss'


const rootElement = document.querySelector('#root');

const SeacrhField = props => {
    console.log(props);

     return (
        <div className="search">
            <h1 className="serach__title">{`Hello, ${props.name}. What to search for you?`}</h1>
            <div className="serach__field">
                <input type="text" className="search__input"/>
                <button className="search__button">Search</button>
            </div>
        </div>
    )
     
}

ReactDOM.render(<SeacrhField name="Bob"/>, rootElement)