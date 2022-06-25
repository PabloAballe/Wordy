/* @ts-ignore */
import PropTypes from "prop-types";
import style from "./InfoBar.module.css";

export const InfoBar = () => {
  return <div className={`${style.InfoBar} sticky bottom-0 bg-white h-12 p-2 left-0`}>InfoBar Component</div>;
};

InfoBar.propTypes = {};

InfoBar.defaultProps = {};
