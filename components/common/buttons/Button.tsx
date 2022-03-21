import { ButtonOrLink } from "./ButtonOrLink";
import { ButtonOrLinkProps } from "./ButtonOrLinkProps";

type ButtonProps = ButtonOrLinkProps & {
  variant?: "primary" | "secondary" | "danger";
};

const styles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "border-solid border-[1px] border-gray-300 hover:border-gray-400",
  danger: "",
} as const;

export const Button = ({
  variant = "secondary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <ButtonOrLink
      {...props}
      className={`
        block py-1 px-3 rounded-md active:scale-95 transition-all
        ${styles[variant]}
        ${className}
      `}
    />
  );
};
