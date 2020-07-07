
import React from 'react';
const RED = '#f00'
const BLUE = '#00f'


class Toggler extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            condition: 'Off',
            color: RED
        }
        console.log(this.state.condition)
    }
    setBodyColorChangeText = () => {
        if (this.state.condition == 'Off') {
            this.setState({
                condition: this.state.condition = 'On',
                // color: this.state.color = RED,
                bodyColor: document.body.style.backgroundColor = RED,
            })
        } else {
            this.setState({
                condition: this.state.condition = 'Off',
                bodyColor: document.body.style.backgroundColor = BLUE,
            })
        }
    }

    render() {
        return (
            <body>
                <button
                
                    onClick={() => this.setBodyColorChangeText()}
                    className="toggler">{this.state.condition}</button>

            </body>
        )
    }
}

export default Toggler;
