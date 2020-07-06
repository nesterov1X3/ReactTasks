import React from 'react';
import Transaction from './Transaction.jsx';

class TransactionsList extends React.Component {
  
  render(){
    const {transactions} = this.props;

    return(
      <div>
      <ul className="transactions">
      {transactions.map(transactions => (
        <Transaction key={transactions.id} {...transactions} />
      ))}
    </ul>
    </div>
    )
    
  }
}


export default TransactionsList