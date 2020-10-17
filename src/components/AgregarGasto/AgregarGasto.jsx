import React from "react";
import { useState } from "react";
import Modal from "../Modal";
import "./agregarGasto.scss";

const AgregarGasto = ({ add }) => {
  const [gasto, setgasto] = useState({
    name: "",
    quantity: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    add({
      ...gasto,
      quantity: parseInt(gasto.quantity),
      id: new Date().getTime(),
    });
    setgasto({
      name: "",
      quantity: 0,
    });
  };

  const handleValues = (e) => {
    const {
      target: { value, name },
    } = e;
    setgasto((g) => ({
      ...g,
      [name]: value,
    }));
  };

  return (
    <div className="agregar-gasto">
      <h2 className="agregar-gasto__title">Agrega tus gastos aquí</h2>
      <form className="agregar-gasto__form" onSubmit={onSubmit}>
        <div className="agregar-gasto__group">
          <label
            htmlFor="name"
            className="agregar-gasto__name"
            placeholder="Ej. Transporte"
          >
            Nombre Gasto
          </label>
          <input
            type="text"
            id="cantidad"
            name="name"
            className="agregar-gasto__input"
            onChange={handleValues}
            value={gasto.name}
          />
        </div>
        <div className="agregar-gasto__group">
          <label htmlFor="cantidad" className="agregar-gasto__name">
            Cantidad Gasto
          </label>
          <input
            type="number"
            id="cantidad"
            name="quantity"
            className="agregar-gasto__input"
            onChange={handleValues}
            value={gasto.quantity}
          />
        </div>
        <button className="btn btn--fill">AGREGAR GASTO</button>
      </form>
    </div>
  );
};

export default AgregarGasto;
