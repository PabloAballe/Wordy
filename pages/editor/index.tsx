/**
 *
 * This page is the base of the Editor
 *
 */
import type { NextPage } from "next";
import { ToolBar, WordyEditor, MainLayout } from "../../components";

const Editor: NextPage = () => {
  return (
    <MainLayout>
    <div className="main-container">
      <ToolBar />
      <WordyEditor />
    </div>
  </MainLayout>
  );
};

export default Editor;
