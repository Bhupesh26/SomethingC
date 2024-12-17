// useDisableRightClick.ts
import { useEffect } from "react";

export const useDisableRightClick = () => {
  useEffect(() => {
    // Disable right-click globally
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    // Add the event listener
    window.addEventListener("contextmenu", handleRightClick);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);
};
