import { store } from "../store";
import { ADD_NEW_PAGE, DELETE_PAGE, UPDATE_DOCUMENT_CONTENT } from "../types";

export const addNewPage = () => {
  return store.dispatch({ type: ADD_NEW_PAGE });
};

export const deletePage = (pageNumber) => {
  return store.dispatch({ type: DELETE_PAGE, payload: { pageNumber } });
};

export const updateDocumentContent = (pageNumber, content) => {
  return store.dispatch({
    type: UPDATE_DOCUMENT_CONTENT,
    payload: { pageNumber, content },
  });
};
