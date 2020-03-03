import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Transaction = props => {
  const { data } = props;

  return (
    <div>
      <h3>{data}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    data: state.user.data
  };
};

export default connect(mapState)(Transaction);

/**
 * PROP TYPES
 */
Transaction.propTypes = {
  data: PropTypes.string
};
