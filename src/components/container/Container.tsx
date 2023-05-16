import React, { ReactNode } from "react";

import "./container.scss";

interface IContainerProps {
  children: ReactNode;
}
const Container = ({ children }: IContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
