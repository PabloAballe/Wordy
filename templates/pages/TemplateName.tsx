import "./TemplateName.style.css";
import PropTypes from "prop-types";
import React from "react";
import type { NextPage } from "next";

export const TemplateName: NextPage = () => {
  return <div data-testid="Box">TemplateName Component</div>;
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};
