import { MouseEventHandler, ReactNode } from "react";

export interface ButtonOrLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  to?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
