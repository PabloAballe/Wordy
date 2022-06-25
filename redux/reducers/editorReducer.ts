import * as t from "../types";

export const editorState = {
  documents: [
    {
      name: "Default Document",
    },
  ],
};

const editorReducer = (state = editorState , { type, payload }) => {
  switch (type) {
    case t.ADD_NEW_DOCUMENT:
      let newDocument = {
        name: state.documents.length++,
      };
      state.documents.push(newDocument);
      console.log(state);
      return state;
    default:
      return { ...state };
  }
};

export default editorReducer;
