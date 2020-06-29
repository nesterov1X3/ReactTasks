//повесить обработчик 
// 
import React from 'react';
const RED = '#f00'
const BLUE = '#00f'


class Toggler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            condition: 'Off'
        }
    }
    setBodyColorChangeText = () => {
        // this.setState({
        //     condition: this.state.condition = 'On'
        // })

        if (this.condition == 'Off') {
            this.setState({
                condition: this.state.condition = 'On'
            })} else {
                this.setState({
                    condition: this.state.condition = 'Off'
                })
            }
            
    
        // document.body.style.backgroundColor = color;

    }

    render() {
        return (
            <div className="buttonClick">
                <button
                    onClick={() => this.setBodyColorChangeText()}
                    className="toggler">{this.state.condition}</button>

            </div>
        )
    }
}

export default Toggler;

