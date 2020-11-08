import React from "react";
import classNames from "classnames";

const Main = ({id, className, children }) => (
  <div id={id} className={classNames("main", className)}>{children}</div>
);

export default Main;
