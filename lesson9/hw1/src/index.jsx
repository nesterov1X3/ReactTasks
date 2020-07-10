import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';


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
    }

]


ReactDOM.render(<UsersList users={users} />, rootElement)

