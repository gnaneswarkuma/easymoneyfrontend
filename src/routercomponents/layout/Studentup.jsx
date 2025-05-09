import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Image=()=>{
  return <>
  <div style={{width:"600px",height:"600px",zIndex:"100",position:"fixed",top:"40%",right:"5%"}}>
      <img src="https://www.paytronix.com/hubfs/catering%20crackers.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
const Image1=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"100",position:"fixed",top:"40%",left:"5%"}}>
      <img src="https://st.depositphotos.com/1533030/4357/v/450/depositphotos_43570017-stock-illustration-menu-design.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
export const Studentup = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const age = useRef();
  const aadhaarRef = useRef();
  const contactRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      age: age.current.value,
      aadhaar: aadhaarRef.current.value,
      contact: contactRef.current.value,
    };

    console.log('User Details:', userDetails);
    try {
      const response = await fetch(`https://easymoney-skpj.onrender.com/student/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      console.log(response);
      if (response.ok) {
        navigate("/s/signin");
      }
    } catch (error) {
      console.log("signup ", error);
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#fff',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '40px auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#444' }}>Student Sign Up</h2>

      <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
        Student Name:
        <input
          type="text"
          ref={fullNameRef}
          required
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Email:
        <input
          type="email"
          ref={emailRef}
          required
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Password:
        <input
          type="password"
          ref={passwordRef}
          required
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Age:
        <input
          type="number"
          ref={age}
          required
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Aadhaar Number:
        <input
          type="text"
          ref={aadhaarRef}
          required
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Contact:
        <input
          type="text"
          ref={contactRef}
          required
          style={inputStyle}
        />
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          width: '100%',
          marginTop: '20px'
        }}
      >
        Sign Up
      </button>
    </form>
    <Image/>
    <Image1/></>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginTop: '5px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '15px',
  color: '#333'
};
