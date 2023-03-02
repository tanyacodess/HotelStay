import React from "react";
import moment from "moment";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

AOS.init({
  duration: '2000'
});

function LandingScreen() {
  return (
    <div className="landing-screen" style={{ background: 'linear-gradient(to bottom right, #4c97ff, #52c8fa)' }}>
      <div className="landing row justify-content-center text-center">
        <div className="col-md-9 my-auto" style={{ borderBottom: '8px solid white' }}>
          <h2 style={{ color: "white", fontSize: "130px" }} data-aos='zoom-in'>StayOver</h2>
          <h1 style={{ color: "white", fontSize: "50px", marginTop: '30px' }} data-aos='zoom-out'>“Discover Your Next Staycation with StayOver's Best Hotel Deals”</h1>
          <Link to="/home">
            <button className='btn btn-primary' style={{ marginTop: '50px', fontSize: '24px', background: 'white', color: '#4c97ff', border: 'none' }}>User</button>
          </Link>
          <a href="http://localhost:3000/admin">
            <button className='btn btn-primary' style={{ marginLeft: '10px',marginTop: '50px', fontSize: '24px', background: 'white', color: '#4c97ff', border: 'none' }}>Admin</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
