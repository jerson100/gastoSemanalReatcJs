import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import AgregarGasto from "../AgregarGasto/AgregarGasto";
import Gastos from "../Gastos/Gastos";
import "./reporteSemanalDashboard.scss";
import Information from "../Information/Information";
import Modal from "../Modal";

const ReporteSemanalDashboard = ({ presupuesto }) => {
  const [gastos, setgastos] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [messageError, setmessageError] = useState("");

  const addGasto = (g) => {
    if (g.quantity <= 0) {
      setmessageError(<p>El gasto no puede ser menor o igual a 0</p>);
      setshowModal(true);
    } else if (getQuantityGatos + g.quantity > presupuesto) {
      setmessageError(
        <p>
          No se puede agregar el gasto <b>{g.name}</b> con <b>{g.quantity}</b>
        </p>
      );
      setshowModal(true);
    } else {
      setgastos([...gastos, g]);
    }
  };

  const getQuantityGatos = useMemo(() => {
    return gastos.reduce((prev, current) => {
      return prev + current.quantity;
    }, 0);
  }, [gastos]);

  const colorBgRest =
    getQuantityGatos >= (presupuesto * 75) / 100
      ? `rgb(246, 210, 213)`
      : getQuantityGatos >= (presupuesto * 50) / 100
      ? `rgb(255, 241, 197)`
      : `rgb(206, 235, 214)`;

  return (
    <div className="reportesemanal-dashboard">
      <div className="reportesemanal-dashboard__left">
        <AgregarGasto add={addGasto} />
      </div>
      <div className="reportesemanal-dashboard__right">
        <Gastos gastos={gastos} />
        <Information
          text={`Presupuesto: $${presupuesto}`}
          color="rgb(196, 225, 253)"
          textColor="rgb(44, 82, 121)"
        />
        <Information
          text={`Restante: $${presupuesto - getQuantityGatos}`}
          color={colorBgRest}
          textColor="rgb(44, 82, 121)"
        />
      </div>
      {showModal && (
        <Modal.Document>
          <Modal.Header>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{messageError}</Modal.Body>
          <Modal.Footer>
            <button
              className="btn  btn--align-right"
              onClick={() => setshowModal(false)}
            >
              Ok!
            </button>
          </Modal.Footer>
        </Modal.Document>
      )}
    </div>
  );
};

ReporteSemanalDashboard.propTypes = {
  presupuesto: PropTypes.number.isRequired,
};

export default ReporteSemanalDashboard;
