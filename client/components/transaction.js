import React, { Component } from "react";
import { connect } from "react-redux";
import { getTransactions } from "../store/transaction";
import { SingleTransaction } from "./singleTransaction";

class Transaction extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const transactions = this.props.transactions;
    console.log("Trans==>", transactions);
    return (
      <div>
        <h2>Transactions: </h2>
        {transactions && !transactions.error ? (
          transactions.map(transaction => (
            <SingleTransaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <div>No Transaction To Show</div>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    transactions: state.transaction
  };
};
const mapDispatch = dispatch => {
  return {
    getTransactions: () => dispatch(getTransactions())
  };
};

export default connect(mapState, mapDispatch)(Transaction);
