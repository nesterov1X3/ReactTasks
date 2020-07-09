import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserForm from './App.jsx';

const user = {
    name: 'Alex',
    student: 'true',
    occupation: 'selo',
    about: 'selo-2',
}
const rootElement = document.querySelector('#root');


ReactDOM.render(<UserForm user={user} />, rootElement)

