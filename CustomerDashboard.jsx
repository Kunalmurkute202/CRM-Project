import React, {useState} from "react";
import Support from "../Customdash/Support";
import AddTicket from "../Customdash/AddTicket";
import Ticketlist from "../Customdash/Ticketlist";
import AboutUs from "../Customdash/AboutUs";
import Service from "../Customdash/Service";
import Contact from "../Customdash/Contact";
import "../CSS/Customer.css";
import AddFeedback from "../Customdash/AddFeedback";
import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  const [activePage, setActivePage] = useState("addticket");

  const pages = {
    support: <Support />,
    addticket: <AddTicket />,
    viewticket: <Ticketlist />,
    addfeedback: <AddFeedback/>,
    about: <AboutUs />,
    service: <Service />,
    contact: <Contact />
  };
const navigate=new useNavigate();
  return (
    <div className="dashboard-layout">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Customer Dashboard</h2>
        <ul className="sidebar-menu">
          <li onClick={() => setActivePage("support")}>Support</li>
          <li onClick={() => setActivePage("addticket")}>Add Ticket</li>
          <li onClick={() => setActivePage("viewticket")}>View Ticket</li>
          <li onClick={() => setActivePage("addfeedback")}>AddFeedback</li>
          <li onClick={() => setActivePage("about")}>About Us</li>
          <li onClick={() => setActivePage("service")}>Services</li>
          <li onClick={() => setActivePage("contact")}>Contact</li>
          <p>
            <button onClick={()=>navigate("/")}>Exit</button>
          </p>
        </ul>
      </div>

      {/* Dynamic Page Content */}
      <div className="dashboard-content">
        {pages[activePage]}
      </div>

    </div>
  );
};

export default CustomerDashboard;
