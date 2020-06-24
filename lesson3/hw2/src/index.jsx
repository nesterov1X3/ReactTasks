import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Profile from './Profile.jsx'


const UserData= {
    firstName:"John",
    lastName:"Doe",
    birthDate:`2003-01-01T11:11:11.819Z`,
    birthPlace:'London',
}
const rootElement = document.querySelector('#root')
ReactDOM.render(<Profile
    UserData={UserData}

/>, rootElement)