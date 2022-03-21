import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
  disabled?: boolean;
};

export const ButtonOrLink = ({
  children,
  onClick,
  to,
  className = "",
  disabled,
}: ButtonProps) => {
  if (to) {
    return (
      <Link href={to}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
