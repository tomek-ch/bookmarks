import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  toggle: () => void;
}

export const Modal = ({ children, toggle }: ModalProps) => {
  return (
    <>
      <div
        onClick={toggle}
        className="fixed inset-0 bg-black/70 w-full animate-fade-in"
      />
      <div className="fixed p-2 w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="
          animate-pop-up
          p-4 bg-white w-full
          rounded-md shadow-md
          "
        >
          {children}
        </div>
      </div>
    </>
  );
};
