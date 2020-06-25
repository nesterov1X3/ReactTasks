import React from 'react';
import Clock from './Clock.jsx';

const App = ()=> {
    return (
        <>
       <Clock loacation={'London'} offset={2} />
       <Clock loacation={'Paris'} offset={64323} />
       <Clock loacation={'Menfis'} offset={42} />
       
       </>
    );
};

export default App;