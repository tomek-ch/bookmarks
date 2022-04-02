import { Button } from "./Button";
import { ButtonOrLinkProps } from "./ButtonOrLinkProps";

export const FloatingButton = (props: ButtonOrLinkProps) => {
  return (
    <Button
      variant="primary"
      className={`
      fixed bottom-4 left-[calc(100%-(28rem/2))]
      flex items-center justify-center
      shadow-md !rounded-full w-10 h-10
      `}
      {...props}
    >
      {props.children}
    </Button>
  );
};
