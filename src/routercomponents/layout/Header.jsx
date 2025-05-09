import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header style={headerStyles}>
      <nav style={navStyles}>
        <NavLink to="/e/home" style={linkStyles} activeStyle={activeLinkStyles}>Home</NavLink>
        <NavLink to="/e/about" style={linkStyles} activeStyle={activeLinkStyles}>About</NavLink>
        <NavLink to="/e/event/signup" style={linkStyles} activeStyle={activeLinkStyles}>Sign Up</NavLink>
        <NavLink to="/e/event/signin" style={linkStyles} activeStyle={activeLinkStyles}>Sign In</NavLink>
      </nav>
      {/* <PhysicsScene style={{Zndex:-1}}/> */}
    </header>
  );
};

// Inline CSS styles for Header
const headerStyles = {
  backgroundColor: '#1a1a1a',
  padding: '30px 20px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const linkStyles = {
  color: '#fff',
  textDecoration: 'none',
  padding: '10px 15px',
  fontSize: '25px',
  fontWeight: '500',
  transition: 'background-color 0.3s, color 0.3s',
};

const activeLinkStyles = {
  backgroundColor: '#007BFF',
  color: '#fff',
  borderRadius: '5px',
};

