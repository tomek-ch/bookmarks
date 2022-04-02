import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/70 w-full" />
      <div className="fixed p-2 w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="
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
