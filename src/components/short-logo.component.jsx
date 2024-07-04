import fluxShortLogo from "../assets/logo-short/Flux-logos_white.png";
export const ShortLogo = ({ style }) => {
  return (
    <img
      src={fluxShortLogo}
      alt="Flux Short Logo"
      style={{ width: "100px", ...style }}
    />
  );
};
