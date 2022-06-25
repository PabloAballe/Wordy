/* @ts-ignore */
import PropTypes from "prop-types";
import style from "./ToolBar.module.css";
import {
  CgFormatUnderline,
  CgFormatItalic,
  CgMathPlus,
  CgImage,
  CgLink,
  CgUndo,
  CgRedo,
  CgArrowsExchange,
  CgTrashEmpty,
  CgCopy,
  CgMathMinus,
  CgFormatJustify,
  CgFormatLeft,
  CgFormatRight,
  CgFormatCenter,
} from "react-icons/cg";
import {
  MdOutlineFormatBold,
  MdOutlineStrikethroughS,
  MdSelectAll,
} from "react-icons/md";
import { FiScissors } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

export const ToolBar = () => {
  const imageRef = useRef();
  const [_document, set_document] = useState({} as any);
  const [activeItems, setActiveItems] = useState({
    underline: false,
    italic: false,
    bold: false,
    bgColor: false,
    strikeThrought: false,
    JustifyLeft: false,
    JustifyFull: false,
    JustifyCenter: false,
    JustifyRight: false,
    selectAll: false,
  });

  const insertLink = () => {
    let url: string = prompt("Enter the URL");
    _document.execCommand("createLink", false, url);
  };
  const insertImage = () => {
    imageRef.current.click();
  };
  const changeColor = () => {
    let color: string = prompt("Enter your color in hex ex:#f1f233");
    _document.execCommand("foreColor", false, color);
  };
  const copySelection = () => {
    _document.execCommand("copy", false, "");
  };

  const updateActiveCommands = () => {
    setActiveItems({
      ...activeItems,
      underline: _document.queryCommandState("underline"),
      italic: _document.queryCommandState("italic"),
      bold: _document.queryCommandState("bold"),
      bgColor: _document.queryCommandState("foreColor"),
      strikeThrought: _document.queryCommandState("strikeThrought"),
      JustifyLeft: _document.queryCommandState("JustifyLeft"),
      JustifyFull: _document.queryCommandState("JustifyFull"),
      JustifyCenter: _document.queryCommandState("JustifyCenter"),
      JustifyRight: _document.queryCommandState("JustifyRight"),
      selectAll: _document.queryCommandState("selectAll"),
    });
  };

  useEffect(() => {
    set_document(document);
  }, []);

  useEffect(() => {
    if (_document.addEventListener)
      _document.addEventListener("selectionchange", updateActiveCommands);
  }, [_document]);

  return (
    <div className="bg-white w-full rounded p-2 mb-4">
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.underline ? "btn-active" : ""
        }`}
        onClick={() => {
          _document.execCommand("underline", false, "");
        }}
      >
        <CgFormatUnderline className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.italic ? "btn-active" : ""
        }`}
        onClick={() => {
          _document.execCommand("italic", false, "");
        }}
      >
        <CgFormatItalic className="text-xl" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => _document.execCommand("fontSize", false, "1em")}
      >
        <CgMathMinus className="text-xl" />
      </button>

      <button
        className="btn btn-square btn-ghost"
        onClick={() => _document.execCommand("fontSize", false, "5em")}
      >
        <CgMathPlus className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.bold ? "btn-active" : ""
        }`}
        onClick={() => _document.execCommand("bold", false, "")}
      >
        <MdOutlineFormatBold className="text-xl" />
      </button>
      <button className="btn btn-square btn-ghost" onClick={() => insertLink()}>
        <CgLink className="text-xl" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => _document.execCommand("cut", false, "")}
      >
        <FiScissors className="text-xl" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => insertImage()}
      >
        <input
          className="hidden"
          type="file"
          accept="image/*"
          ref={imageRef}
          onChange={() => insertImage()}
        />
        <CgImage className="text-xl" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => _document.execCommand("undo", false, "")}
      >
        <CgUndo className="text-xl" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => _document.execCommand("redo", false, "")}
      >
        <CgRedo className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.bgColor ? "btn-active" : ""
        }`}
        onClick={() => changeColor()}
      >
        <CgArrowsExchange className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.strikeThrought ? "btn-active" : ""
        }`}
        onClick={() => _document.execCommand("strikeThrough", false, "")}
      >
        <MdOutlineStrikethroughS className="text-xl" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => _document.execCommand("delete", false, "")}
      >
        <CgTrashEmpty className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.selectAll ? "btn-active" : ""
        }`}
        onClick={() => _document.execCommand("selectAll", false, "")}
      >
        <MdSelectAll className="text-xl" />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => copySelection()}
      >
        <CgCopy className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.JustifyLeft ? "btn-active" : ""
        }`}
        onClick={() => _document.execCommand("JustifyLeft", false, "")}
      >
        <CgFormatLeft className="text-xl" />
      </button>

      <button
        className={`btn btn-square btn-ghost ${
          activeItems.JustifyFull ? "btn-active" : ""
        }`}
        onClick={() => _document.execCommand("JustifyFull", false, "")}
      >
        <CgFormatJustify className="text-xl" />
      </button>

      <button
        className={`btn btn-square btn-ghost ${
          activeItems.JustifyCenter ? "btn-active" : ""
        }`}
        onClick={() => _document.execCommand("JustifyCenter", false, "")}
      >
        <CgFormatCenter className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost ${
          activeItems.JustifyRight ? "btn-active" : ""
        }`}
        onClick={() => _document.execCommand("JustifyRight", false, "")}
      >
        <CgFormatRight className="text-xl" />
      </button>
    </div>
  );
};

ToolBar.propTypes = {};

ToolBar.defaultProps = {};
