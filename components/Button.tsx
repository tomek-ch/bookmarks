import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
  disabled?: boolean;
};

const styles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "border-solid border-[1px] border-gray-300 hover:border-gray-400",
  danger: "",
} as const;

export const Button = ({
  children,
  variant = "secondary",
  onClick,
  to,
  className = "",
  disabled,
}: ButtonProps) => {
  const style = `
    block py-1 px-3 rounded-md active:scale-95 transition-all
    ${styles[variant]}
    ${className}
  `;

  if (to) {
    return (
      <Link href={to}>
        <a className={style}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
