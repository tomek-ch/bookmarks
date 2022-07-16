import { ButtonOrLink } from "./buttons/ButtonOrLink";
import { ButtonOrLinkProps } from "./buttons/ButtonOrLinkProps";

export const InlineLink = (props: ButtonOrLinkProps) => {
  return (
    <ButtonOrLink
      className="inline-block text-blue-600 hover:text-blue-700 active:scale-95 transition-all"
      {...props}
    />
  );
};
