import React from "react";
import PropTypes from "prop-types";
import style from "./Document.module.css";

export const Document = () => {
  return (
    <div contentEditable={true} className={style.Document}>
      Document Component
    </div>
  );
};

Document.propTypes = {};

Document.defaultProps = {};
