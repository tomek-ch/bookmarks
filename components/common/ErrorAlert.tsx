import { ReactNode } from "react";

interface ErrorAlertProps {
  children: ReactNode;
}

export const ErrorAlert = ({ children }: ErrorAlertProps) => {
  return <div className="text-red-600 mt-1">{children}</div>;
};
