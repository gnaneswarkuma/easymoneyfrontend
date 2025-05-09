import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import "./event.css"; // Import CSS file
import {createBrowserRouter, createRoutesFromElements, NavLink, Route, RouterProvider} from "react-router-dom";
const Image=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"10",position:"fixed",top:"40%",right:"5%"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59Lh5A4Zc4pPTRZm45HWCsoFUDlj_n7evsGKFLG6BDvnWPqeK-dQy6Pn-oByOMv0bgV8&usqp=CAU" alt="" style={{width:"100%",height:"100%",borderRadius:"300px"}} />

  </div>
  </>
}
export const Shome = () => {
  const location = useLocation();
  const user = location.state?.user;
  if (user){
    const [data, setData] = useState([]);

  const place = useRef();
  const date = useRef();
  const handleClick = async(da,name,contact) => {
    console.log("Button clicked with data:", da,name);
    const userDetails = {
      da,
      name,
      contact:contact,
    };
    try {
      const response = await fetch("https://easymoney-skpj.onrender.com/student/post2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const result = await response.json();
      alert("you have rejisterd for an event for forther conformation contact 8096626996");
    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Failed to fetch data");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      place: place.current.value,
      date: date.current.value,
    };

    try {
      const response = await fetch("https://easymoney-skpj.onrender.com/student/post1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const result = await response.json();

      if (response.ok) {
        setData(result.post);
        alert("Posts fetched successfully!");
      } else {
        console.error("Server error:", result.message);
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Failed to fetch data");
    }
  };

  return (
    <div style={{width:"500px",height:"600px",backgroundColor:"#f9f9f9",borderRadius:"40px",position:"absolute",right:"35%",padding:"80px",fontSize:"large"}}>
      <h1>Welcome, {user.fullName}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Place:
          <input type="text" ref={place} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" ref={date} required />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>

      {/* Display posts */}
      <div style={{ marginTop: "20px" }}>
        <h2>Search Results:</h2>
        {data.length > 0 ? (
          data.map((post, index) => (
            <div key={index} style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px"
            }}>
              <p><strong>Event Name:</strong> {post.eventname}</p>
              <p><strong>Place:</strong> {post.place}</p>
              <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {post.time}</p>
              <button onClick={() => handleClick(post._id,user.email,user.contact)}>Send Data</button>
            </div>
          ))
        ) : (
          <p>No posts to show.</p>
        )}
      </div>
      
    </div>
  );
  }
  else{
    return (
      <>
      <div className="container">
        <h1 className="welcome-message">Welcome</h1>
        <NavLink to={"/s/signin"}><p className="login-message">Please log in to register an event.</p></NavLink>
        
      </div>
      <Image/></>
    );
  }
};
