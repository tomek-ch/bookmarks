import { Button } from "./Button";
import { ButtonOrLinkProps } from "./ButtonOrLinkProps";

export const FloatingButton = (props: ButtonOrLinkProps) => {
  return (
    <Button
      variant="primary"
      className={`
      fixed bottom-4
      right-[calc((100%-min(100%,28rem))/2+1rem)] 
      flex items-center justify-center
      shadow-md !rounded-full w-10 h-10
      `}
      {...props}
    >
      {props.children}
    </Button>
  );
};
