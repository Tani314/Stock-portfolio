// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {getStock} from '../store/stocks'
// import {Stock} from './stock'

// /**
//  * COMPONENT
//  */
// class Portfolio extends Component {
//   componentDidMount() {
//     this.props.getPortfolio()
//   }

//   componentDidUpdate() {
//     // Checks if portfolio needs dynamic update, based on if
//     // most recent update was when market opened
//     // if (this.props.portfolio[0]) {
//     //   let mostRecentUpdate = new Date(this.props.portfolio[0].updatedAt)
//     //   if (!updatedWhenMarketOpenedToday(mostRecentUpdate, new Date())) {
//     //     this.props.getPortfolio()
//     //   }
//     // }
//   }

//   render() {
//     const {portfolio} = this.props
//     let portfolioValue = 0
//     if (portfolio) {
//       portfolioValue = portfolio.reduce((total, stock) => {
//         total += stock.value
//         return total
//       }, 0)
//     }
//     return (
//       <div>
//         {/* Prices are recorded accurately but rounded for cleaner display */}
//         <h2>Portfolio: ${portfolioValue.toFixed(2)}</h2>
//         {portfolio ? (
//           portfolio.map(stock => <Stock key={stock.id} stock={stock} />)
//         ) : (
//           <div> Nothing to show</div>
//         )}
//       </div>
//     )
//   }
// }

// const mapState = state => {
//   return {
//     portfolio: state.stock
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     getStock: () => dispatch(getStock())
//   }
// }

// export default connect(mapState, mapDispatch)(Portfolio)
