import React from 'react'
import ProductsList from './ProductsList.jsx'
import CartTitle from './CartTitle.jsx'

class ShoppingCart extends React.Component {
    state = {
        cartItems: [
            {
                id: '1',
                name: 'iPhone 11',
                price: 999,
            },
            {
                id: '2',
                name: 'iPad Pro',
                price: 790,
            },
            {
                id: '3',
                name: 'iPad Pro2',
                price: 690,
            },
            {
                id: '4',
                name: 'iPad Pro',
                price: 390,
            },
            {
                id: '5',
                name: 'iPad Pro6',
                price: 790,
            },
            {
                id: '6',
                name: 'iPad Pro4',
                price: 750,
            },
            {
                id: '7',
                name: 'iPad Pro2',
                price: 1790,
            },
        ],
    };
    render() {
        const count = this.state.cartItems.length;
        return (
            <div className="column">
                <CartTitle
                    userName={this.props.userData.firstName}
                    count={count} />
                <ProductsList cartItems={this.state.cartItems} />
            </div>
        )
    }
}
export default ShoppingCart