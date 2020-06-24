import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss'
import Profile from './Profile.jsx'


const userData= {
    firstName:"John",
    lastName:"Doe",
    birthDate:`2003-01-01T11:11:11.819Z`,
    birthPlace:'London',
}
const rootElement = document.querySelector('#root')
ReactDOM.render(<Profile
    userData={userData}

/>,  rootElement)