import React from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.style.css";

const TemplateName = () => {
  return (
    <div className={styles.TemplateName} data-testid="Box">
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
