import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Image=()=>{
  return <>
  <div style={{width:"600px",height:"600px",zIndex:"100",position:"fixed",top:"40%",right:"5%"}}>
      <img src="https://5.imimg.com/data5/WL/MO/MY-43309290/caterers-250x250.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
const Image1=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"100",position:"fixed",top:"40%",left:"5%"}}>
      <img src="https://nvpmart.in/wp-content/uploads/2023/02/b457f066fc90c56a0192a695a4e42c1b.jpg" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
export const Studentin = () => {
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
      const response = await fetch(`https://easymoney-skpj.onrender.com/student/signin`, {
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
          navigate("/s/home", {
            state: {
              user: data.user,
            }
          });
        }
      }
    } catch (error) {
      console.log("signin error", error);
    }
  };

  return (
   <> <form onSubmit={handleSubmit} style={{
    background: '#f4f4f4',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '40px auto',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)'
  }}>
    <h2 style={{ textAlign: 'center', color: '#333' }}>Student Sign In</h2>

    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', color: '#444' }}>Email:</label>
      <input
        type="email"
        ref={emailRef}
        required
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '5px', color: '#444' }}>Password:</label>
      <input
        type="password"
        ref={passwordRef}
        required
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />
    </div>

    <button type="submit" style={{
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      width: '100%',
      cursor: 'pointer',
      fontSize: '16px'
    }}>
      Sign In
    </button>
  </form>
  <Image/>
  <Image1/></>
  );
};
