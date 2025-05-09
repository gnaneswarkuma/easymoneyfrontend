import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Image=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"-1",position:"fixed",top:"40%",right:"40%"}}>
      <img src="https://cdn.vectorstock.com/i/500p/29/04/stylish-spoon-and-fork-logo-for-cafe-vector-30362904.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
export const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log('User Details:', userDetails);

    try {
      const response = await fetch(`https://easymoney-skpj.onrender.com/event/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log("Received from backend:", data);
        alert(data.message);
        if (data.user) {
          navigate("/e/home", {
            state: {
              user: data.user, // or any data you want to pass
            }
          });
        }
      }
    } catch (error) {
      console.log("Signin error", error);
    }
  };

  return (<>
    <form onSubmit={handleSubmit} style={formStyles}>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Email:</label>
        <input type="email" ref={emailRef} required style={inputStyles} />
      </div>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Password:</label>
        <input type="password" ref={passwordRef} required style={inputStyles} />
      </div>
      <button type="submit" style={buttonStyles}>Sign In</button>
      
    </form>
    <Image/>
    </>
  );
};

// Inline CSS for styling the form
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '500px',
  margin: '50px auto',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const inputContainerStyles = {
  marginBottom: '15px',
  width: '80%',
};

const labelStyles = {
  fontSize: '16px',
  marginBottom: '5px',
  color: '#333',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const buttonStyles = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

buttonStyles[':hover'] = {
  backgroundColor: '#45a049',
};
