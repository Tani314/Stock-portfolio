import React from "react";

export const SingleTransaction = props => {
  const { transaction } = props;

  return (
    <div>
      <div>
        {transaction.type}({transaction.ticker})- {transaction.quantity} Shares
        @ $
        {parseFloat(transaction.currentPrice).toFixed(2)}
      </div>
    </div>
  );
};
