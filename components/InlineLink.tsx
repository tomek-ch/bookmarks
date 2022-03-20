import Link from "next/link";
import { ReactNode } from "react";

interface InlineLinkProps {
  children: ReactNode;
  to: string;
}

export const InlineLink = ({ to, children }: InlineLinkProps) => {
  return (
    <Link href={to}>
      <a className="text-blue-600 hover:text-blue-700 transition-all">
        {children}
      </a>
    </Link>
  );
};
