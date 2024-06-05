import React, { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}
const ReusableContainer = ({ children }: IContainerProps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto ">{children}</div>;
};

export default ReusableContainer;
