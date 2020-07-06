import React from 'react';
import Transaction from './Transaction.jsx';

class TransactionList extends React.Component {
  
  render(){
    const {transactions} = this.props;

    return(
      <div>
      <ul className="transactions">
      {transactions.map(transaction => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </ul>
    </div>
    )
    
  }
}


export default TransactionList