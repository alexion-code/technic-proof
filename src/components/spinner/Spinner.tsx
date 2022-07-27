import React from "react";
import "./spinner.scss";

const Loading = () => {
  return (
    <div className="spinner-component">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
