import React from 'react';
import ShoppingCart from './ShoppingCart.jsx'
import Profile from './Profile.jsx'

class Page extends React.Component {
    state = {
        userData: {
            firstName: 'John',
            lastName: 'Doe',
        },
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value,
            },
        });
    }
    render() {
        return (
            <>
            <h1 className='title'>{`Hello, ${this.state.userData.firstName}`}</h1>
            <div className="page">
                <main className="content">
                    <ShoppingCart userData={this.state.userData} />
                    <Profile
                        userData={this.state.userData}
                        handleChange={this.handleChange} />
                </main>
            </div>
            </>
        )
    }
}

export default Page;