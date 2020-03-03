import React from "react";

export const SingleTransaction = props => {
  const { transaction } = props;
  return (
    <div>
      <div>
        {transaction.type}({transaction.ticker})- {transaction.quantity} Shares
        @ $
        {transaction.currentPrice}
      </div>
    </div>
  );
};
