/* @ts-ignore */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./InfoBar.module.css";

export const InfoBar = () => {
  const [_document, set_document] = useState({} as any);
  const documentState = useSelector((state) => state.editorReducer.document);
  const [state, setState] = useState({
    wordsInDocument: 0,
    numberOfPages: 0,
    wordsSelected: 0,
    charactersSelected: 0,
    currentPage: {
      pageNumber: 1,
      pageContent: "",
      wordsInPage: 0,
      numberOfCharacters: 0,
    },
  });

  useEffect(() => {
    set_document(document);
  }, []);

  

  useEffect(() => {
    const sumOfWords = documentState.reduce((acc, curr) => {
      return acc + curr.content.split(" ").length;
    }, 0);

    setState({
      ...state,
      wordsInDocument: sumOfWords,
      numberOfPages: documentState.length,
    });
  }, [documentState]);

  useEffect(() => {
    if (_document.addEventListener)
      _document.addEventListener("selectionchange", (_event) => {
        setState({
          ...state,
          wordsSelected: _event.target.getSelection().toString().split(" ")
            .length,
          charactersSelected: _document.getSelection().toString().length,
        });
      });
  }, []);

  return (
    <div
      className={`${style.InfoBar} sticky bottom-0 bg-white h-12 p-2 left-0 flex items-center justify-center gap-2`}
    >
      <div>
        <b>Pages:</b> {state.numberOfPages}
      </div>
      <div>
        <b>Total words:</b> {state.wordsInDocument}
      </div>
      <div>
        <b>Words in page:</b> {state.currentPage.wordsInPage}
      </div>
      <div>
        <b>Words selected:</b> {state.wordsSelected}
      </div>
      <div>
        <b>Characters in page:</b> {state.currentPage.numberOfCharacters}
      </div>
      <div>
        <b>Characters selected:</b> {state.charactersSelected}
      </div>
    </div>
  );
};

InfoBar.propTypes = {};

InfoBar.defaultProps = {};
