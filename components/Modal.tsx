import { ReactNode } from "react";
import { useModal } from "../hooks/useModal";

type ModalProps = {
  children: ReactNode;
} & ReturnType<typeof useModal>;

export const Modal = ({
  children,
  toggle,
  isOpen,
  isExiting,
  finishExit,
}: ModalProps) => {
  if (isOpen) {
    return (
      <>
        <div
          onClick={toggle}
          className={`fixed inset-0 bg-black/70 w-full z-10 ${
            isExiting ? "animate-fade-out" : "animate-fade-in"
          }`}
          onAnimationEnd={({ animationName }) => {
            if (animationName === "fade-out") {
              finishExit();
            }
          }}
        />
        <div
          className="
          fixed p-2 w-full max-w-md z-10
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          "
        >
          <div
            className={`
            ${isExiting ? "animate-hide" : "animate-pop-up"}
            p-4 bg-white w-full
            rounded-md shadow-md
            `}
          >
            {children}
          </div>
        </div>
      </>
    );
  }

  return null;
};
