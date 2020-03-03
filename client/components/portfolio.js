import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Portfolio = props => {
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
    email: state.user.data
  };
};

export default connect(mapState)(Portfolio);

/**
 * PROP TYPES
 */
Portfolio.propTypes = {
  data: PropTypes.string
};
