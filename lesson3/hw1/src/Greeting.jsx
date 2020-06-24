import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

const rootElement = document.querySelector('#root')

const Greeting = (props) => {

    const age = (new Date().getFullYear() - new Date(props.birthDate).getFullYear());
    return (
        <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}</div>
    )
}
ReactDOM.render(<Greeting
    firstName='John'
    lastName="Dou"
    birthDate={new Date(`2001-01-01T11:11:11.819Z`)}

/>, rootElement)


export default Greeting