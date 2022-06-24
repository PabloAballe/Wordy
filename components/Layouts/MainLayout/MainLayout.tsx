import * as consts from "../../../consts";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import style from "./MainLayout.module.css";

/* @ts-ignore */
export const MainLayout = ({ children }) => {
  return (
    <div data-testid="Box">
      <Head>
        <title>{consts.APP.name}</title>
        <meta name="description" content={consts.APP.description} />
        <link rel="icon" href={`/${consts.APP.description}`} />
      </Head>

      <main>{children}</main>
    </div>
  );
};

MainLayout.propTypes = {};

MainLayout.defaultProps = {};
