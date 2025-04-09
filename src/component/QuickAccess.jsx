import React from "react";
import "./Styles/QuickAccess.css";

const QuickAccess = () => {
  return (
    <section className="quick-access">
      <h3>Quick Access</h3>
      <div className="buttons">
        <button>My Profile</button>
        <button>Manage Family</button>
        <button>My Appointments</button>
        <button>Delete My Account</button>
        <button>Help</button>
        <button>Logout</button>
      </div>
    </section>
  );
};

export default QuickAccess;
