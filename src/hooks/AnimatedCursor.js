import React, { useEffect, useRef, useState } from "react";
import "./Cursor.css";

function Cursor({ color = "rgb(50, 50, 50)", outerSize = 8, innerSize = 8 }) {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = (e) => {
    setIsVisible(true);
  };

  const onMouseLeave = (e) => {
    setIsVisible(false);
  };

  const onMouseDown = (e) => {
    setIsActive(true);
  };

  const onMouseUp = (e) => {
    setIsActive(false);
  };

  return (
    <>
      {isVisible && (
        <div
          ref={cursorOuterRef}
          className="cursor-outer"
          style={{
            width: `${outerSize}px`,
            height: `${outerSize}px`,
            left: `${coords.x - outerSize / 2}px`,
            top: `${coords.y - outerSize / 2}px`,
            borderColor: color,
            transform: isActive ? `scale(1.5)` : "",
          }}
        />
      )}
      {isVisible && (
        <div
          ref={cursorInnerRef}
          className="cursor-inner"
          style={{
            width: `${innerSize}px`,
            height: `${innerSize}px`,
            left: `${coords.x - innerSize / 2}px`,
            top: `${coords.y - innerSize / 2}px`,
            background: color,
            transform: isActive ? `scale(0.5)` : "",
          }}
        />
      )}
    </>
  );
}

export default Cursor;
