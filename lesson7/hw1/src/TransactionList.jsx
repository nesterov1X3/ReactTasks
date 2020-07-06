import React from 'react';
import Transaction from './Transaction.jsx';

class TransactionList extends React.Component {
  
  render(){
    const {transactions} = this.props;

    return(
      <div>
      <ul className="transactions">
      {transactions.map(trans => (
        <Transaction key = {Math.random()} rate={trans.rate} amount={trans.amount} from={trans.from} to={trans.to}/>
      ))}
    </ul>
    </div>
    )
    
  }
}


export default TransactionList