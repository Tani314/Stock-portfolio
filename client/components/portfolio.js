import React, { Component } from "react";
import { connect } from "react-redux";
import { getStock } from "../store/stocks";
import { Stock } from "./stock";
import PortfolioForm from "./portfolioForm";

class Portfolio extends Component {
  componentDidMount() {
    this.props.getStock();
  }

  componentDidUpdate() {}

  render() {
    const accountBalance = this.props.accountBalance;
    const portfolio = this.props.portfolio;
    return (
      <div>
        <h2>Portfolio: ({accountBalance}) </h2>
        {portfolio ? (
          portfolio.map(stock => <Stock key={stock.id} stock={stock} />)
        ) : (
          <div> Nothing to show</div>
        )}
        <PortfolioForm />
      </div>
    );
  }
}

const mapState = state => {
  console.log("STATE===>", state);
  return {
    portfolio: state.stocks,
    accountBalance: state.user.accountBalance
  };
};

const mapDispatch = dispatch => {
  return {
    getStock: () => dispatch(getStock())
  };
};

export default connect(mapState, mapDispatch)(Portfolio);
