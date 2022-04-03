import Link from "next/link";
import { ButtonOrLinkProps } from "./ButtonOrLinkProps";

export const ButtonOrLink = ({
  children,
  onClick,
  to,
  className = "",
  disabled,
  type = "button",
}: ButtonOrLinkProps) => {
  if (to) {
    return (
      <Link href={to}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
