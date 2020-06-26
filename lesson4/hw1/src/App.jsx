import React from 'react';
import Clock from './Clock.jsx';

const App = ()=> {
    return (
        <>
       <Clock location='London' timeLocal={2}  />
       <Clock location='Paris' timeLocal={64323}  />
       <Clock location='Memfis' timeLocal={42}  />
       
       </>
    );
};

export default App;