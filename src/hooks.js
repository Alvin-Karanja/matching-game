import React, { useEffect, useRef, useState } from "react";

export default function useHover() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const refCopy = ref; // Create a copy of the ref

    // Anonymous function to handle hover events
    const handleMouseOver = enter;
    const handleMouseOut = leave;

    refCopy.current.addEventListener("mouseover", handleMouseOver);
    refCopy.current.addEventListener("mouseleave", handleMouseOut);

    // Anonymous function to remove event listeners on unmount
    return () => {
      refCopy.current.removeEventListener("mouseover", handleMouseOver);
      refCopy.current.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [ref]);

  return [ref, hovered];
}
