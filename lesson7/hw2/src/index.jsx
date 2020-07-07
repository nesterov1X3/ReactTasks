import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx'


const rootElement = document.querySelector('#root');

const users =[
    {
        id: 1,
        age: 21,
        name: 'Tom'
    },
    {
        id: 2,
        age: 81,
        name: 'Dick'
    },
    {
        id: 3,
        age: 27,
        name: 'Bob'
    },
    {
        id: 4,
        age: 61,
        name: 'Sick'
    },
    {
        id: 5,
        age: 61,
        name: 'Sick'
    },
    {
        id: 6,
        age: 61,
        name: 'Sick'
    },
    // {
    //     id: 7,
    //     age: 61,
    //     name: 'Sick'     
    // },
    // {
    //     id: 8,
    //     age: 61,
    //     name: 'Sick'
    // }
]


ReactDOM.render(<UsersList users={users} />, rootElement)

