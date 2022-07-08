import * as t from "../types";

export const editorState = {
  document: [
    {
      name: "Page 1",
      pageNumber: 1,
      content: "",
    },
  ],
};

const editorReducer = (state = editorState, { type, payload }) => {
  switch (type) {
    case t.ADD_NEW_PAGE:
      let newPage = {
        name: `Page ${state.document.length + 1}`,
        pageNumber: state.document.length + 1,
        content: "",
      };
      return {
        ...state,
        document: [...state.document, newPage],
      };
    case t.DELETE_PAGE:
      return {
        ...state,
        document: state.document.filter(
          (page) => page.pageNumber !== payload.pageNumber
        ),
      };

    case t.UPDATE_DOCUMENT_CONTENT:
      return {
        ...state,
        document: state.document.map((page) => {
          if (page.pageNumber === payload.pageNumber) {
            return {
              ...page,
              content: payload.content,
            };
          }
          return page;
        }),
      };
    default:
      return { ...state };
  }
};

export default editorReducer;
