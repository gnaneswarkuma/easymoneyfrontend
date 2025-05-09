import "../Surya.css"; 

export const About = () => {
    return (
        <div id="about" style={{position:"relative",top:"100px"}}>
        <h1 class='title'>About Our Platform</h1>
          <div className="about-container">
            
            <div className="about-card">
              <h2>For Students</h2>
              <ul>
                <li>Login and provide your details.</li>
                <li>Search catering services by date or location.</li>
                <li>View service info and click "Confirm" to contact provider.</li>
              </ul>
            </div>
            <div className="about-card">
              <h2>For Service Providers</h2>
              <ul>
                <li>Login to your account.</li>
                <li>Post your service and list student requirements.</li>
                <li>Contact interested students directly.</li>
              </ul>
            </div>
          </div>
        </div>
      
    );
  };