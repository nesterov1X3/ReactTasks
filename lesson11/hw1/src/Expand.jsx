import React from 'react';
import PropTypes from 'prop-types'

class Expand extends React.Component {
   
        state = {
            isOpen: false,
        }
    

    toggler = () =>
        this.state.showContent
            ? this.setState({ isOpen: false })
            : this.setState({ isOpen: true });



    render() {
        let { title, children } = this.props;

        if(!this.state.isOpen){
            children = null;
          }
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{title}</span>
                    <button onClick={this.toggler} className="expand__toggle-btn">
                        {
                            this.state.isOpen
                                ? <i className='fas fa-chevron-up'></i>
                                : <i className='fas fa-chevron-down'></i>
                        }
                    </button>
                </div>
                <div className="expand__content">{children}</div>
            </div>
        )
    }
}


// Dialog.propTypes = {
//     isOpen: PropTypes.bool,
//     children: PropTypes.element.isRequired,
//     title: PropTypes.string,
//     onClose: PropTypes.func.isRequired
// }

// Dialog.defaultProps = {
//     isOpen:false,
//     title:''
// }
export default Expand;