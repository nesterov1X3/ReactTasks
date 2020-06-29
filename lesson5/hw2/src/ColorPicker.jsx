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
                color: this.state.title = 'Auqa',

            })
        }
        switchColorTextBisque = () => {
            this.setState({
                color: this.state.title = 'Bisque',

            })
        }
        clearText= () =>{
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
                    onMouseMove={() => this.switchColorTextCoral()}
                    onMouseOut={() => this.clearText()}
                     className="picker__button picker__button_coral"></button>
                    <button 
                    onMouseOut={() => this.clearText()}
                    onMouseMove={() => this.switchColorTextAqua()}
                    className="picker__button picker__button_aqua"></button>
                    <button
                    onMouseOut={() => this.clearText()}
                    onMouseMove={() => this.switchColorTextBisque()}
                     className="picker__button picker__button_bisque"></button>
                </div>
            </div>
        )
    }
}




export default ColorPicker;