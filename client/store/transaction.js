import axios from "axios";
import history from "../history";
/**
 * ACTION TYPES
 */
const GOT_TRANSACTION = "GOT_TRANSACTION";
const ADDED_TRANSACTION = "ADDED_TRANSACTION";
/**
 * INITIAL STATE
 */
const defaultTransaction = [];

/**
 * ACTION CREATORS
 */
const gotTransactions = transactions => (
  { type: GOT_TRANSACTION }, transactions
);
const addedTransaction = newTransaction => (
  { type: ADDED_TRANSACTION }, newTransaction
);
/**
 * THUNK CREATORS
 */
export const getTransactions = () => async dispatch => {
  try {
    const res = await axios.get("/api/transactions");
    dispatch(gotTransactions(res.data || defaultTransaction));
    history.push("/transactions");
  } catch (err) {
    console.error(err);
  }
};
export const addTransaction = newTrans => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.post(`/api/transactions`, newTrans);
  } catch (inputErr) {
    return dispatch(gotTransactions({ error: inputErr }));
  }
  try {
    let currentState = getState();
    if (currentState.transaction.error) {
      dispatch(getTransactions());
    } else {
      dispatch(addedTransaction(res.data));
      history.push("/transactions");
    }
  } catch (err) {
    console.error(err);
  }
};
/**
 * REDUCER
 */
export default function(state = defaultTransaction, action) {
  switch (action.type) {
    case GOT_TRANSACTION:
      return action.transaction;
    case ADDED_TRANSACTION:
      let newTransaction = [...state];
      newTransaction.push(action.newTransaction);
      return newTransaction;
    default:
      return state;
  }
}
