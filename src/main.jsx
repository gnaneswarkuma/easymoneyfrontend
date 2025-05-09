import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Footer } from './routercomponents/layout/Footer.jsx';
import Surya from './Surya.jsx';




const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#333',
  color: 'white',
  padding: '15px',
  width: '100%',
  position: 'relative',
  bottom: 0,
  marginTop: '50px',
  fontSize: '0.9rem',
};

const footerLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '5px',
  borderRadius: '5px',
};

const footerLinkHoverStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <App />
      {/* <Showcase/> */}
 
  </StrictMode>
);
