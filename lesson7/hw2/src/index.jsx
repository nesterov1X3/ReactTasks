import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx'


const rootElement = document.querySelector('#root');

const users =[
    {
        age: 21,
        name: 'Tom'
    },
    {
        age: 21,
        name: 'Tom'
    },
    {
        age: 27,
        name: 'Bob'
    },
    {
        age: 61,
        name: 'Sick'
    }
]


ReactDOM.render(<UsersList users={users} />, rootElement)

