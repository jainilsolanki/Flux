import { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
export const ThemeSwitch = ({ style }) => {
  const properties = {
    dark: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    light: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };
  // ...

  const [isDarkMode, setDarkMode] = useState(false);
  const { r, transform, cx, cy, opacity } =
    properties[isDarkMode ? "dark" : "light"];

  const svgContainerProps = useSpring({ transform });
  const centerCircleProps = useSpring({ r });
  const maskedCircleProps = useSpring({ cx, cy });
  const linesProps = useSpring({ opacity });
  const rippleRef = useRef(null);

  const toggleDarkMode = () => {
    const buttonRect = rippleRef.current.getBoundingClientRect();
    const rippleX = buttonRect.width / 2;
    const rippleY = buttonRect.height / 2;

    setRipple({
      rippleX,
      rippleY,
      scale: 3,
      opacity: 0,
    });

    setDarkMode((previous) => !previous);
  };

  const [ripple, setRipple] = useState(null);

  const rippleProps = useSpring({
    from: { scale: 0, opacity: 1 },
    to: { scale: ripple?.scale || 0, opacity: ripple?.opacity || 0 },
    reset: true,
    config: { friction: 100 },
    onRest: () => setRipple(null),
  });

  return (
    <div style={style} ref={rippleRef}>
      {ripple && (
        <animated.div
          style={{
            position: "absolute",
            top: ripple.rippleY,
            left: ripple.rippleX,
            width: "100%",
            height: "100%",
            transform: `translate(50%, -50%) scale(${ripple.scale})`,
            borderRadius: "50%",
            backgroundColor: isDarkMode ? "#FFF" : "#000",
            ...rippleProps,
          }}
        />
      )}
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        onClick={toggleDarkMode}
        style={{
          cursor: "pointer",
          ...svgContainerProps,
          zIndex: 1,
        }}
      >
        <mask id="myMask2">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle style={maskedCircleProps} r="9" fill="black" />
        </mask>

        <animated.circle
          cx="12"
          cy="12"
          style={centerCircleProps}
          fill="black"
          mask="url(#myMask2)"
        />
        <animated.g stroke="currentColor" style={linesProps}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </div>
  );
};
