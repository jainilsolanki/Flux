import { useEffect, useRef, useState } from "react";

export const EllipsisText = ({ text, maxLines, styles }) => {
  const containerRef = useRef(null);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const lineHeight = parseFloat(getComputedStyle(container).lineHeight);
    const maxHeight = lineHeight * maxLines;

    if (container.offsetHeight > maxHeight) {
      setIsEllipsisActive(true);
    } else {
      setIsEllipsisActive(false);
    }
  }, [text, maxLines]);

  return (
    <h4
      ref={containerRef}
      style={{
        color: "#fff",
        maxWidth: "500px",
        fontWeight: 500,
        wordBreak: "break-all",
        wordWrap: "break-word",
        textAlign: "justify",
        overflow: "hidden",
        textOverflow: isEllipsisActive ? "ellipsis" : "clip",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: maxLines,
        whiteSpace: "normal",
        ...styles,
      }}
    >
      {text}
    </h4>
  );
};
