import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const Document = ({ children, vertical }) => {
  const verticalDocument = vertical
    ? "modal__document modal__document--centered"
    : "modal__document";
  return ReactDOM.createPortal(
    <div className="modal">
      <div className={verticalDocument}>
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.body
  );
};

Document.defaultProps = {
  vertical: true,
};

const Title = ({ children }) => {
  return <p className="modal__title">{children}</p>;
};

const Header = ({ children }) => {
  return <div className="modal__header">{children}</div>;
};

const Body = ({ children }) => {
  return <div className="modal__body">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="modal__footer">{children}</div>;
};

export default {
  Document,
  Header,
  Title,
  Body,
  Footer,
};
