import { NavLink } from "react-router-dom";

export const Sheader = () => {
  const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#ffffff",
    padding: "20px 35px",
    borderRadius: "8px",
    transition: "0.3s",
  };

  const navLinks = [
    { path: "/s/home", label: "Home", bg: "#111" },
    { path: "/s/about", label: "About", bg: "#111" },
    // { path: "/s/contact", label: "Contact", bg: "#111" },
    { path: "/s/signup", label: "Signup", bg: "#111" },
    { path: "/s/signin", label: "Signin", bg: "#111" },
  ];

  return (
    <nav
      style={{
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {navLinks.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          style={{ ...linkStyle, backgroundColor: link.bg }}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
