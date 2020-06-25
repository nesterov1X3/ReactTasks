import React from 'react';
import Clock from './Clock.jsx';

const App = ()=> {
    return (
        <>
       <Clock location={'London'} timeT={2} interval={1000} />
       <Clock location={'Paris'} timeT={64323} interval={1000} />
       <Clock location={'Menfis'} timeT={42} interval={1000} />
       
       </>
    );
};

export default App;