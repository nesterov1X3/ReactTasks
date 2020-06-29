//найти кнопки и тайтл
// записать в консруктор

import React from 'react';


class ColorPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Red',
        }
    }
        switchColorTextCoral = () => {
            this.setState({
                color: this.state.title = 'Coral',

            })
        }
        switchColorTextAqua = () => {
            this.setState({
                color: this.state.title = 'Aqua',

            })
        }
        switchColorTextBisque = () => {
            this.setState({
                color: this.state.title = 'Bisque',

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
                    onMouseMove={() => this.switchColorTextCoral()}
                     className="picker__button picker__button_coral"></button>
                    <button 
                    onMouseMove={() => this.switchColorTextAqua()}
                    className="picker__button picker__button_aqua"></button>
                    <button
                    onMouseMove={() => this.switchColorTextBisque()}
                     className="picker__button picker__button_bisque"></button>
                </div>
            </div>
        )
    }
}




export default ColorPicker;