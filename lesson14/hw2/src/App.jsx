import React, { useState } from 'react'
import Clock from './Clock.jsx'



const App = () => {
    const [visible, setVisible] = useState(true);

    // const toggle = () => {
    //     setVisible(visible = false)
    // }

    return (
        <>
            <div>
                <button onClick={() => setVisible(!visible)}>Toggle</button>
            </div>
            
            <div>{visible && <Clock location="New York" offset={5} />}</div>
            <div>{visible && <Clock location="Kyiv" offset={2} />}</div>
            <div>{visible && <Clock location="London" offset={0} />}</div>

        </>
    );
}


// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             visible: true
//         }
//         this.toggle = this.toggle.bind(this)
//     }
//     toggle() {
//         this.setState({
//             visible: !this.state.visible
//         })
//     }

//     render() {

//     }
// };

export default App;