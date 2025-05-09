
import "./NEW.css"

import React, { useEffect, useState } from "react";


const data = [
  { name: "kumari catering service", place: "gajuwaka", date: "2025-05-10", time: "12:00 PM" },
  { name: "Chandu's catering service", place: "duvvada", date: "2025-05-09", time: "11:30 AM" },
  { name: "SE catering service", place: "anakapalle", date: "2025-05-10", time: "6:15 PM" },
  { name: "Sri Laxmi catering service", place: "gantyada", date: "2025-05-11", time: "4:00 PM" },
  { name: "mkr catering service", place: "duvvada", date: "2025-05-12", time: "6:00 PM" }
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % data.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-carousel-container">
      <div
        className="card-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p><strong>Place:</strong> {item.place}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Time:</strong> {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
