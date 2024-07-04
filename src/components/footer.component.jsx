import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { LongLogo } from "./long-logo.component";

export const Footer = () => {
  const footerStyles = {
    width: "100%",
  };

  const containerStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (minWidth: 640px)": {
      display: "flex",
      justifyContent: "space-between",
    },
    "@media (minWidth: 768px)": {
      display: "flex",
      gridTemplateColumns: "1fr",
    },
  };

  const hrStyles = {
    marginTop: "1rem",
    borderColor: "rgba(0, 0, 0, 0.1)",
  };

  const copyrightStyles = {
    marginTop: "1rem",
    "@media (minWidth: 640px)": {
      marginTop: "0",
    },
  };

  const socialIconsStyles = {
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
    "@media (minWidth: 640px)": {
      marginTop: "0",
      justifyContent: "center",
    },
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        {/* logo */}
        <div>
          {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              style={logoImageStyles}
            /> */}
          {/* <p style={logoTextStyles}>Flowbite</p> */}
          <LongLogo style={{ cursor: "pointer", marginTop: 30 }} />
        </div>

        {/* links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            "@media (minWidth: 640px)": {
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            },
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 2fr)",
              gap: "2rem",
              "@media (minWidth: 640px)": {
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
              },
            }}
          >
            <div>
              <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Company</p>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  marginTop: 20,
                  gap: 8,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                Need Help ?
              </p>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  marginTop: 20,
                  gap: 8,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Share Feedback
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Legal</p>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  marginTop: 20,
                  gap: 8,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    DMCA &amp; Copyright details
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* store links */}
        <div>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
              Also available on
            </p>
          </div>
          <div style={{ marginTop: 20 }}>
            <div>
              <img
                className="store"
                src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                alt="Get it on google play"
              />
            </div>
            <div>
              <img
                className="store"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the app store"
                width={153}
              />
            </div>
          </div>
        </div>
      </div>

      <hr style={hrStyles} />

      {/* social links */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 14,
          padding: "0 30px",
          "@media (minWidth: 640px)": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        }}
      >
        <p style={copyrightStyles}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "0.875rem",
              color: "#333",
            }}
          >
            © Flux™ 2023
          </a>
        </p>
        <div style={socialIconsStyles}>
          <a href="#" style={{ textDecoration: "none" }}>
            <BsFacebook />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <BsInstagram />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <BsTwitter />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <BsGithub />
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <BsDribbble />
          </a>
        </div>
      </div>
    </footer>
  );
};
