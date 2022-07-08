import { Document } from "../Document/Document";
import React, { useEffect } from "react";
import style from "./WordyEditor.module.css";
import { useSelector } from "react-redux";
import { deletePage } from "../../../redux/actions";

export const WordyEditor = () => {
  const documentState = useSelector((state) => state.editorReducer.document);
  return (
    <div className={style.WordyEditor}>
      
    {documentState.map((doc, index ) => (
        <Document key={doc.pageNumber} doc={doc}/>
      ))}
    </div>
  );
};

WordyEditor.propTypes = {};

WordyEditor.defaultProps = {};
