/**
 *
 * This page is the base of the Editor
 *
 */
import type { NextPage } from "next";
import { ToolBar, WordyEditor, MainLayout, Drawer, InfoBar } from "../../components";
import { NavBar } from "../../components/Core/NavBar/NavBar";
import style from "./index.module.css";

const Editor: NextPage = () => {
  return (
    <MainLayout>
      <div className="main-container h-screen w-full">
        <Drawer>
          <NavBar />
          <div className={style.editorContainer}>
            <ToolBar />
            <WordyEditor />
          </div>
          <InfoBar/>
        </Drawer>
      </div>
    </MainLayout>
  );
};

export default Editor;
