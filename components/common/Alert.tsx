import { ReactNode } from "react";

type Variant = keyof typeof styles;

interface AlertProps {
  children: ReactNode;
  variant?: Variant;
}

const styles = {
  default: "bg-gray-200 text-gray-700",
  danger: "bg-red-100 text-red-700",
} as const;

export const Alert = ({ children, variant = "default" }: AlertProps) => {
  return <div className={`p-3 rounded-md ${styles[variant]}`}>{children}</div>;
};
