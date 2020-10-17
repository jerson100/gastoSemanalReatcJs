import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import Question from "../components/Question/Question";
import ReporteSemanalDashboard from "../components/ReporteSemanalDashboard/ReporteSemanalDashboard";
import "./gastoSemanal.scss";

const GastoSemanal = () => {
  const [presupuesto, setpresupuesto] = useState(0);
  const [showQuestion, setshowQuestion] = useState(true);
  const [showModal, setshowModal] = useState(false);

  const addValueQuestion = useCallback((e, value) => {
    e.preventDefault();
    const num = parseInt(value);
    if (!isNaN(num) && num > 0) {
      setpresupuesto(num);
      setshowQuestion(false);
    } else {
      setshowModal(true);
    }
  }, []);

  return (
    <div className="gasto-semanal">
      <header className="gasto-semanal__header">
        <h1 className="gasto-semanal__title">Gasto Semanal</h1>
      </header>
      <main className="gasto-semanal__main">
        {showQuestion && (
          <Question
            title="Coloca tu presuspuesto"
            onSubmit={addValueQuestion}
          />
        )}
        {!showQuestion && <ReporteSemanalDashboard presupuesto={presupuesto} />}
        {showModal && (
          <Modal.Document vertical="center">
            <Modal.Header>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>El presupuesto es incorrecto</p>
            </Modal.Body>
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
      </main>
    </div>
  );
};

export default GastoSemanal;
