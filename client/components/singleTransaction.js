import React from "react";

export const SingleTransaction = props => {
  const { transaction } = props;
  return (
    <div>
      <div className="column">
        {transaction.type}({transaction.ticker})- {transaction.quantity} Shares
        @ $
        {transaction.currentPrice}
      </div>
    </div>
  );
};
