import React from "react";

const setStockStatus = stock => {
  if (stock.openPrice === stock.currPrice / stock.totalQuantity)
    return "equalToOpen";
  if (stock.openPrice > stock.currPrice / stock.totalQuantity)
    return "lessThanOpen";
  if (stock.openPrice < stock.currPrice / stock.totalQuantity)
    return "greaterThanOpen";
};
export const Stock = props => {
  const { stock } = props;
  console.log("STOCK", stock);
  const stockStatus = setStockStatus(stock);
  return (
    <div className={`${stockStatus}`}>
      <div className="column">
        {stock.ticker} - {stock.totalQuantity} Shares ${(
          stock.currPrice * stock.totalQuantity
        ).toFixed(2)}
      </div>
      {/* {stockStatus === 'greaterThanOpen' && <div className="column">↑</div>}
    {stockStatus === 'lessThanOpen' && <div className="column">↓</div>} */}
    </div>
  );
};
