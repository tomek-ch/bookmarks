import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "danger";
}

const bgColors = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "border-solid border-[1px] border-gray-300 hover:border-gray-400",
  danger: "",
} as const;

export const Button = ({
  children,
  variant = "secondary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 px-3 rounded-md active:scale-95 transition-all ${bgColors[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
