import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const [isExiting, setIsExiting] = useState(false);

  const toggle = () => {
    if (isOpen) {
      setIsExiting(true);
    } else {
      setIsOpen(true);
    }
  };

  const finishExit = () => {
    setIsExiting(false);
    setIsOpen(false);
  };

  return { isOpen, isExiting, toggle, finishExit };
};
