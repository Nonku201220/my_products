 import React from 'react';
import './About.css';

export default function About () {
  return (
    <div className="about-container">
      <h2 className="about-heading">Contact Us</h2>
      <div className="form-container">
        <div className="form-column">
        </div>
        <div className="form-column">
          <form className="form" action="/action_page.php">
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: '170px' }}
              ></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 
 



