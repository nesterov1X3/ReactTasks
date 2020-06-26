import React from 'react';
import Clock from './Clock.jsx';

const App = ()=> {
    return (
        <>
       <Clock location='London' offset={2}  />
       <Clock location='Paris' offset={6}  />
       <Clock location='Memfis' offset={4}  />
       
       </>
    );
};

export default App;