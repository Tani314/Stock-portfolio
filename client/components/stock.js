import React from "react";

const setStockStatus = stock => {
  if (stock.openPrice === stock.currPrice) return `equalToOpen`;
  else if (stock.openPrice > stock.currPrice) return `lessThanOpen`;
  else return `greaterThanOpen`;
};

export const Stock = props => {
  const { stock } = props;
  const stockStatus = setStockStatus(stock);
  return (
    <div className={`${stockStatus}`}>
      <div className="column">
        {stock.ticker} - {stock.totalQuantity} Shares ${(
          stock.currPrice * stock.totalQuantity
        ).toFixed(2)}
      </div>
    </div>
  );
};
