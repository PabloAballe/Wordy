import { Document } from "../Document/Document";
import PropTypes from "prop-types";
import React from "react";
import style from "./WordyEditor.module.css";
import { useState } from "react";

export const WordyEditor = () => {
  const [nDocuments, setNDocuments] = useState([
    {
      documentN: 1,
    },
  ]);

  return (
    <div className={style.WordyEditor}>
      {nDocuments.map((_doc) => (
        <Document />
      ))}
    </div>
  );
};

WordyEditor.propTypes = {};

WordyEditor.defaultProps = {};
