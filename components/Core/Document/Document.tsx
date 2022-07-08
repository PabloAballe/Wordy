import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import style from "./Document.module.css";
import { deletePage, updateDocumentContent } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { CgTrashEmpty } from "react-icons/cg";

export const Document = ({ doc }) => {
  return (
    <>
      {doc.pageNumber > 1 && (
        <div className={style.PageSeparator}>
          <button
            className={`btn btn-square btn-ghost `}
            onClick={() => {
              deletePage(doc.pageNumber);
            }}
          >
            <CgTrashEmpty className="text-xl" />
          </button>
        </div>
      )}
      <div
        contentEditable={true}
        suppressContentEditableWarning={true}
        className={`${style.Document} rounded shadow-md`}
        onInput={(e) =>
          updateDocumentContent(doc.pageNumber, e.currentTarget.textContent)
        }
      >
        {doc.pageNumber}
      </div>
    </>
  );
};

Document.propTypes = {};

Document.defaultProps = {};
