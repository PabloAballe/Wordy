import React from "react";
import PropTypes from "prop-types";
import style from "./Document.module.css";

export const Document = () => {
  return (
    <div contentEditable={true} className={`${style.Document} rounded shadow-md`}>
      Document Component
    </div>
  );
};

Document.propTypes = {};

Document.defaultProps = {};
