import React from "react";

function About() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Anmol Choubey</h1>

        <h3>2nd Year</h3>
        <p><h5>Personal Details</h5></p>
        <p>Registration Number : 209301401</p>      
        <p>Email-id : anmolchoubey.209301401@muj.manipal.edu</p>
        <p>Phone : 934567889</p>
        
        <hr className="my-1" />
        <p> <h5>Description</h5></p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p> <h5>Skills</h5></p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <hr className="my-1" />
        <p>Work links</p>
        <p className="lead">
          <a href="http://">Github</a>
          <br />
          <a href="http://">Linked-in</a>
          <br />
        </p>
        
        
      </div>
    </div>
  );
}

export default About;