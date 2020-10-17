import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import "./question.scss";

const Question = memo(({ title, titleButton, onSubmit }) => {
  const [value, setvalue] = useState("");
  return (
    <div className="question">
      <h2 className="question__title">{title}</h2>
      <form className="question__form" onSubmit={(e) => onSubmit(e, value)}>
        <input
          type="text"
          className="question__input"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <button className="btn btn--fill">{titleButton}</button>
      </form>
    </div>
  );
});

Question.propTypes = {
  title: PropTypes.string.isRequired,
  titleButton: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Question.defaultProps = {
  titleButton: "ok",
};

export default Question;
