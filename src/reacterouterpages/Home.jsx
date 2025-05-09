import { useLocation } from "react-router-dom";
import React, { useRef, useState } from "react";
import "./event.css"; // Import CSS file
import {NavLink} from "react-router-dom";
const Image=()=>{
  return <>
  <div style={{width:"400px",height:"400px",zIndex:"-1",position:"fixed",top:"20%"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9_Cr3l7V8ZZDXIw4mTlXkyLLG2QkmPf5Mg&s" alt="" style={{borderRadius:"300px",width:"100%",height:"100%"}} />

  </div>
  </>
}
export const Home = () => {
  const location = useLocation();
  const user = location.state?.user;
  const place = useRef();
  const time = useRef();
  const date = useRef();
  const eventname = useRef();
  const [list, setList] = useState([]);

  console.log("Received user data:", user);

  if (user) {
    const handleSubmit = async (e) => {
      e.preventDefault();

      const userDetails = {
        place: place.current.value,
        time: time.current.value,
        date: date.current.value,
        eventname: eventname.current.value,
        useremail: user?.email,
        contact: user?.contact,
      };

      try {
        const response = await fetch("https://easymoney-skpj.onrender.com/event/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        });

        const data = await response.json();

        if (response.ok) {
          setList(data.post);
          alert("Post created successfully!");
        } else {
          alert("Error: " + data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    };

    return (
      <div className="container">
          <form onSubmit={handleSubmit} className="form-container">
          <label>
            Event Name:
            <input type="text" ref={eventname} required />
          </label>
          <label>
            Place:
            <input type="text" ref={place} required />
          </label>
          <label>
            Date:
            <input type="date" ref={date} required />
          </label>
          <label>
            Time:
            <input type="time" ref={time} required />
          </label>
          <button type="submit">Post</button>
        </form>
        <div className="event-list">
          {list.length > 0 ? (
            list.map((post, index) => (
              <div key={index} className="event-item">
                <p>
                  <strong>Event Name:</strong> {post.eventname}
                </p>
                <p>
                  <strong>Place:</strong> {post.place}
                </p>
                <p>
                  <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Time:</strong> {post.time}
                </p>
              </div>
            ))
          ) : (
            <p>No posts to show.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="welcome-message">Welcome to Event Manager</h1>
      <NavLink to={"/e/event/signin"}><p className="login-message">Please login to post an event.</p></NavLink>
      <Image/>
    </div>
  );
};