'use client'; // Ensure this is a client-side component

import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled component for the custom cursor
const CursorWrapper = styled.div<{ x: number; y: number }>`
  position: fixed;
  top: ${({ y }) => y - 24}px;  /* Adjust for cursor offset (center cursor) */
  left: ${({ x }) => x - 3}px;  /* Adjust for cursor offset (center cursor) */
  width: 32px;   /* Size of the custom cursor */
  height: 32px;  /* Size of the custom cursor */
  background-image: url('/images/cursor.png');  /* Path to your cursor image */
  background-size: contain;  /* Ensures image fits within div */
  pointer-events: none ; /* Ensures the cursor doesn  't interfere with other elements */
  z-index: 9999;
  transform: translate(-40%, 50%);  /* Center the cursor on the mouse position */
  transition: none;  /* Disable transitions to avoid lag */
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position
  const updateCursorPosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Explicitly hide the default cursor when the component mounts
    document.body.style.cursor = 'none';

    // Update the mouse position on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        updateCursorPosition(e);
      });
    };

    // Add event listener for mousemove
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup: Remove the event listener and restore the default cursor when unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = ''; // Restore default cursor when the component is unmounted
    };
  }, []);

  return <CursorWrapper x={position.x} y={position.y} />;
};

export default Cursor;
