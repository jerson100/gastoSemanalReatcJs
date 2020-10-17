import React from "react";
import Proptypes from "prop-types";
import "./gasto.scss";

const Gasto = ({ name, quantity }) => {
  return (
    <li className="gasto">
      <span className="gasto__name">{name}</span>
      <span className="gasto__quantity">$.{quantity}</span>
    </li>
  );
};

Gasto.propTypes = {
  name: Proptypes.string.isRequired,
  quantity: Proptypes.number.isRequired,
};

export default Gasto;
