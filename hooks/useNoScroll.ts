import { useRef, useEffect } from "react";

export const useNoScroll = (isDisabled: boolean) => {
  const topOffset = useRef(
    typeof window !== "undefined" ? document.documentElement.scrollTop : 0
  );

  useEffect(() => {
    if (isDisabled) {
      topOffset.current = document.documentElement.scrollTop;
      document.body.style.top = `-${topOffset.current}px`;
      // document.body.style.overflowY = "scroll";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.removeProperty("top");
      // document.body.style.removeProperty("overflowY");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("width");

      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.scrollTop = topOffset.current;
      document.documentElement.style.removeProperty("scroll-behavior");
      document.body.style.removeProperty("top");
    }
  }, [isDisabled]);
};