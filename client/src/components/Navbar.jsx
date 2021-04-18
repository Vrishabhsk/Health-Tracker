import React from "react";
import { Link } from "react-router-dom";
import icon from "../pics/nurse.png";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <img src={icon} alt="icon" className="token"/>
        <h1 className="heading">HEALTH-KEEPER</h1>
        {props.home ? (
          <div>
            <Link to="/test" className="links">
              Test
            </Link>
            <Link to="/News" className="links btn-1">
              News
            </Link>
            <Link to="/Cases" className="links btn-2">
              Cases
            </Link>
          </div>
        ) : null}
        {props.news ? (
          <div>
            <Link to="/" className="links btn-1">
              Home
            </Link>
            <Link to="/VaccNews" className="links btn-2">
              Vaccine
            </Link>
            <Link to="/CovNews" className="links c">
              Covid
            </Link>
          </div>
        ) : null}
        {props.vac ? (
          <div>
            <Link to="/" className="links btn-1">
              Home
            </Link>
            <Link to="/News" className="links btn-2">
              Health
            </Link>
            <Link to="/CovNews" className="links">
              Covid
            </Link>
          </div>
        ) : null}
        {props.cov ? (
          <div>
            <Link to="/" className="links btn-1">
              Home
            </Link>
            <Link to="/VaccNews" className="links btn-2">
              Vaccine
            </Link>
            <Link to="/News" className="links c">
              Health
            </Link>
          </div>
        ) : null}
        {props.cas ? (
          <div>
            <Link to="/" className="links btn-1">
              Home
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
