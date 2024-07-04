import fluxLongLogo from "../assets/logo-long/Flux-logos_black.png";

// eslint-disable-next-line react/prop-types
export const LongLogo = ({ style, className }) => {
  return (
    <img
      className={className}
      src={fluxLongLogo}
      alt="Flux Short Logo"
      style={{ width: "200px", ...style }}
    />
  );
};
