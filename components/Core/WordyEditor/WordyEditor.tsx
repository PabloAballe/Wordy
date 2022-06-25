import { Document } from "../Document/Document";
import PropTypes from "prop-types";
import React from "react";
import style from "./WordyEditor.module.css";

export const WordyEditor = () => {
  return (
    <div className={style.WordyEditor}>
      <Document />
      <Document />
      <Document />
      <Document />
    </div>
  );
};

WordyEditor.propTypes = {};

WordyEditor.defaultProps = {};
