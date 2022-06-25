import * as consts from "../../../consts";
import Head from "next/head";
/* @ts-ignore */
import PropTypes from "prop-types";
import style from "./MainLayout.module.css";

/* @ts-ignore */
export const MainLayout = ({ children }) => {
  return (
    <div data-theme="light">
      <Head>
        <title>{consts.APP.name}</title>
        <meta name="description" content={consts.APP.description} />
        <link rel="icon" href={`/${consts.APP.icon}`} />
      </Head>

      <main className="h-screen w-full">{children}</main>
    </div>
  );
};

MainLayout.propTypes = {};

MainLayout.defaultProps = {};
