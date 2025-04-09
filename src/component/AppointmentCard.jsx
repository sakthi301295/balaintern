import React from "react";
import "./Styles/AppointmentCard.css";
import docter from "./docter.jpg";

const AppointmentCard = () => {
  return (
    <div className="appointment-card">
      <div className="doctor-info">
        <div className="doctor-photo" >
        <img src={docter} height="70px" width="100px" alt="docter"></img>
        </div>
        <div className="profiledetails">
          <h4>Dr. Naresh Padmanaabhan</h4>
          <p>Neobone Ortho Clinic</p>
          <a href="#">NBE-AP-250125-001</a>
        </div>
      </div>
      <div className="appointment-details">
        <p><strong>Patient:</strong> Aadharsh Srinivas R</p>
        <p><strong>Date:</strong> 21 Jan 2025</p>
        <p><strong>Time:</strong> 11:30 AM</p>
        <div className="actions">
          <button className="cancel">Cancel</button>
          <button className="reschedule">Reschedule</button>
        </div>
      </div>
    </div>
  );
};
export default AppointmentCard;

