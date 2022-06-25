/* @ts-ignore */
import PropTypes from "prop-types";
import style from "./ToolBar.module.css";
import Picker from "emoji-picker-react";
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
  CgPrinter,
  CgFileDocument,
} from "react-icons/cg";
import {
  MdOutlineFormatBold,
  MdOutlineStrikethroughS,
  MdSelectAll,
} from "react-icons/md";
import { FiScissors } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BsEmojiWink } from "react-icons/bs";
import { ADD_NEW_DOCUMENT } from "../../../redux/types";
import { useSelector, useDispatch } from "react-redux"
import { store } from "../../../redux/store";

export const ToolBar = () => {
  const imageRef = useRef();
  const emojiPickerRef = useRef();
  //const favouriteNotes = useSelector((state) => state.progress.favouriteNotes)
  const [_document, set_document] = useState({} as any);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [activeItems, setActiveItems] = useState({
    underline: false,
    italic: false,
    bold: false,
    color: false,
    strikeThrought: false,
    JustifyLeft: false,
    JustifyFull: false,
    JustifyCenter: false,
    JustifyRight: false,
    selectAll: false,
  });
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };


  const addNewDocument = ()=> {
    store.dispatch({ type: ADD_NEW_DOCUMENT });
  }

  const printDocuments = () => {
    let headstr = "<html><head><title></title></head><body>";
    let footstr = "</body>";
    let oldstr = _document.body.innerHTML;
    let printContents = _document.querySelector(
      ".WordyEditor_WordyEditor__8fhxu"
    ).innerHTML;
    _document.body.innerHTML = headstr + printContents + footstr;
    window.print();
    _document.body.innerHTML = oldstr;
  };

  const showEmojiPicker = (event) => {
    emojiPickerRef.current.classList.toggle("hidden");
  };

  const insertLink = () => {
    let linkURL = prompt("Enter a URL:", "http://");
    let sText = _document.getSelection();
    _document.execCommand(
      "insertHTML",
      false,
      '<a href="' +
        linkURL +
        '" target="_blank" class="underline text-blue-400">' +
        sText +
        "</a>"
    );
  };
  const insertImage = (event) => {
    let image = URL.createObjectURL(event.target.files[0]);
    _document.execCommand("insertimage", 0, image);
  };
  const changeColor = (event) => {
    _document.execCommand("foreColor", false, event.target.value.toString());
  };

  const changeBackgroundColor = (event) => {
    _document.execCommand("BackColor", false, event.target.value.toString());
  };

  const copySelection = () => {
    toast.success("Your selection whas copied to the clipboard");
    _document.execCommand("copy", false, "");
  };

  const updateActiveCommands = () => {
    setActiveItems({
      ...activeItems,
      underline: _document.queryCommandState("underline"),
      italic: _document.queryCommandState("italic"),
      bold: _document.queryCommandState("bold"),
      color: _document.queryCommandState("foreColor"),
      strikeThrought: _document.queryCommandState("strikeThrough"),
      JustifyLeft: _document.queryCommandState("JustifyLeft"),
      JustifyFull: _document.queryCommandState("JustifyFull"),
      JustifyCenter: _document.queryCommandState("JustifyCenter"),
      JustifyRight: _document.queryCommandState("JustifyRight"),
      selectAll: _document.queryCommandState("selectAll"),
    });
  };

  const changeFontSize = (event: any) => {
    _document.execCommand("fontSize", false, event.target.value.toString());
  };

  const changeFontFamily = (event: any) => {
    _document.execCommand("fontName", false, event.target.value.toString());
  };

  useEffect(() => {
    set_document(document);
  }, []);

  useEffect(() => {
    if (_document.addEventListener)
      _document.addEventListener("selectionchange", updateActiveCommands);
  }, [_document]);

  return (
    <div className="bg-white w-full rounded p-2 mb-4 flex items-center justify-start gap-1 flex-wrap">
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
      <div className="w-24">
        <select className="select w-full max-w-xs" onChange={changeFontSize}>
          <option disabled selected>
            Font Size
          </option>
          <option>1em</option>
          <option>2em</option>
          <option>3em</option>
          <option>4em</option>
          <option>5em</option>
          <option>6em</option>
          <option>7em</option>
          <option>8em</option>
          <option>9em</option>
          <option>10em</option>
          <option>11em</option>
          <option>12em</option>
          <option>13em</option>
        </select>
      </div>
      <div className="w-24">
        <select className="select w-full max-w-xs" onChange={changeFontFamily}>
          <option disabled selected>
            Font Family
          </option>
          <option>Arial</option>
          <option>Serif</option>
          <option>Sans-serif</option>
          <option>Monospace</option>
          <option>Cursive</option>
          <option>Fantasy</option>
          <option>Calibri</option>
          <option>Comic Sans MS</option>
        </select>
      </div>

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
        onClick={() => imageRef.current.click()}
      >
        <input
          className="hidden"
          type="file"
          accept="image/*"
          ref={imageRef}
          onChange={insertImage}
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
      <label className="flex items-center gap-2 justify-center flex-wrap">
        <input type="color" onChange={changeColor} />
        <p className="label-text">Color</p>
      </label>

      <label className="flex items-center gap-2 justify-center flex-wrap">
        <input type="color" onChange={changeBackgroundColor} />
        <p className="label-text">Background</p>
      </label>
      {/* <button
        className={`btn btn-square btn-ghost ${
          activeItems.JustifyRight ? "btn-active" : ""
        }`}
        onClick={showEmojiPicker}
      >
        <BsEmojiWink className="text-xl" />
        <div ref={emojiPickerRef} class="hidden top-8">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      </button> */}

      <button className={`btn btn-square btn-ghost `} onClick={printDocuments}>
        <CgPrinter className="text-xl" />
      </button>
      <button
        className={`btn btn-square btn-ghost `}
        onClick={() => addNewDocument()}
      >
        <CgFileDocument className="text-xl" />
      </button>
    </div>
  );
};

ToolBar.propTypes = {};

ToolBar.defaultProps = {};
