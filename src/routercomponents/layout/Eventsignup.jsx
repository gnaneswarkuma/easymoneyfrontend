import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Image=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"-1",position:"fixed",top:"40%",right:"5%"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59Lh5A4Zc4pPTRZm45HWCsoFUDlj_n7evsGKFLG6BDvnWPqeK-dQy6Pn-oByOMv0bgV8&usqp=CAU" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
const Image1=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"-1",position:"fixed",top:"40%",left:"5%"}}>
      <img src="https://nvpmart.in/wp-content/uploads/2023/02/b457f066fc90c56a0192a695a4e42c1b.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
export const Signup = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cateringNameRef = useRef();
  const aadhaarRef = useRef();
  const contactRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      catering: cateringNameRef.current.value,
      aadhaar: aadhaarRef.current.value,
      contact: contactRef.current.value,
    };
const Image=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"-1",position:"fixed",top:"40%",right:"40%"}}>
      <img src="https://cdn.vectorstock.com/i/500p/29/04/stylish-spoon-and-fork-logo-for-cafe-vector-30362904.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
    console.log('User Details:', userDetails);
    try {
      const response = await fetch(`https://easymoney-skpj.onrender.com/event/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      console.log(response);
      if (response.ok) {
        navigate("/e/event/signin");
      }
    } catch (error) {
      console.log("Signup error", error);
    }
  };

  return (<>
    <form onSubmit={handleSubmit} style={formStyles}>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Full Name:</label>
        <input type="text" ref={fullNameRef} required style={inputStyles} />
      </div>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Email:</label>
        <input type="email" ref={emailRef} required style={inputStyles} />
      </div>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Password:</label>
        <input type="password" ref={passwordRef} required style={inputStyles} />
      </div>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Catering Name:</label>
        <input type="text" ref={cateringNameRef} required style={inputStyles} />
      </div>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Aadhaar Number:</label>
        <input type="text" ref={aadhaarRef} required style={inputStyles} />
      </div>
      <div style={inputContainerStyles}>
        <label style={labelStyles}>Contact:</label>
        <input type="text" ref={contactRef} required style={inputStyles} />
      </div>
      <button type="submit" style={buttonStyles}>Sign Up</button>
    </form>
    <Image/>
    <Image1/>
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
