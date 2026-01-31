import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Customer.css";
import AllLead from "../DashboardP/AllLead";
import TicketList from "../Customdash/Ticketlist";
import UserList from "../Pages/UserList";
import EmailComposer from "../Customdash/EmailComposer";
import CustomerList from "../Pages/CustomerList";
import TodaysFollowup from "../DashboardP/TodaysFollowup";
import AllFeedback from "../Pages/AllFeedback";


const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  const pages = {
    leads: <AllLead />,
    tickets: <TicketList />,
    users: <UserList />,
    allfeedback:<AllFeedback/>,
    followups: <TodaysFollowup />,
    email: <EmailComposer />,
    customer: <CustomerList />
  };

  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul className="sidebar-menu">
          <li onClick={() => setActivePage("leads")}>AllLeads</li>
          <li onClick={() => setActivePage("tickets")}>Ticketslist</li>
          <li onClick={() => setActivePage("users")}>Userslist</li>
          <li onClick={() => setActivePage("followups")}>Today's Follow-Ups</li>
          <li onClick={() => setActivePage("email")}>EmailComposer</li>
          <li onClick={() => setActivePage("customer")}>CustomerList</li>
           <li onClick={() => setActivePage("allfeedback")}>AllFeedback</li>
          <li>
            <button className="exit-btn" onClick={() => navigate("/")}>Exit</button>
          </li>
        </ul>
      </div>

      {/* Dynamic Page Content */}
      <div className="dashboard-content">
        {pages[activePage]}
      </div>
    </div>
  );
};

export default AdminDashboard;
