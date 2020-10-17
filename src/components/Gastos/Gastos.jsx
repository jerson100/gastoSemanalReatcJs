import React from "react";
import Gasto from "./Gasto";
import "./gastos.scss";

const Gastos = ({ gastos }) => {
  return (
    <div className="gastos">
      <h2 className="gastos__title">Listado</h2>
      <ul className="gastos__list">
        {gastos.map((g) => (
          <Gasto key={g.id} name={g.name} quantity={g.quantity} />
        ))}
      </ul>
    </div>
  );
};

export default Gastos;
