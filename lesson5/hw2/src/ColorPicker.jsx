//найти кнопки и тайтл
// записать в консруктор

import React from 'react';
const coral = document.querySelector('.picker__button_coral');
const auqa = document.querySelector('.picker__button_aqua');
const bisque = document.querySelector('.picker__button_bisque');

class ColorPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Red',
        }
    }

    switchColorText = (text) => {
        this.setState({
                    color: this.state.title = text,
    
                })

    }

    clearText = () => {
        this.setState({
            color: this.state.title = ''
        })
    }

    render() {
        return (
            <div>
                <div className="picker__title">
                    {this.state.title}
                </div>
                <div>
                    <button
                        onMouseMove={() => this.switchColorText('Coral')}
                        onMouseOut={() => this.clearText()}
                        className="picker__button picker__button_coral"></button>
                    <button
                        onMouseOut={() => this.clearText()}
                        onMouseMove={() => this.switchColorText('Aqua')}
                        className="picker__button picker__button_aqua"></button>
                    <button
                        onMouseOut={() => this.clearText()}
                        onMouseMove={() => this.switchColorText('Bisqua')}
                        className="picker__button picker__button_bisque"></button>
                </div>
            </div>
        )
    }
}




export default ColorPicker;