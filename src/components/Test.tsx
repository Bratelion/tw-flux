import { ReactNode } from "react";

interface TestProps {
  children: ReactNode;
}

export const Test = ({ children }:TestProps) => {
  return <h1 className="text-2xl">{children}</h1>;
};