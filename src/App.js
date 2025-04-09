import React from "react";
import Header from "./component/Header";
import Greeting from "./component/Greeting";
import QuickAccess from "./component/QuickAccess";
import AppointmentCard from "./component/AppointmentCard";
import Banner from "./component/Banner";



const App = () => {
  return (
    <div className="dashboard">
      <Header />
      <Greeting />
      <Banner />
      <QuickAccess />
      <section className="appointments">
        <h3>Upcoming Appointments</h3>
        <AppointmentCard />
      </section>
    </div>
  );
};

export default App;
