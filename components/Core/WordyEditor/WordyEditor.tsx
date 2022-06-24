import PropTypes from "prop-types";
import React from "react";
import style from "./MainLayout.module.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const WordyEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

WordyEditor.propTypes = {};

WordyEditor.defaultProps = {};
