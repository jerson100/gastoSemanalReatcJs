import React from "react";
import PropTypes from "prop-types";
import "./information.scss";

const Information = ({ text, color, textColor }) => {
  return (
    <div
      className="information"
      style={{ backgroundColor: color, borderColor: color, color: textColor }}
    >
      {text}
    </div>
  );
};

Information.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

Information.defaultProps = {
  text: "Ingrese su texto",
  color: "rgb(196, 225, 253)",
  textColor: "rgb(44, 82, 121)",
};

export default Information;
