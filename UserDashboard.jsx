import axios from "axios";
import { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AllLead from '../DashboardP/AllLead'; // Modify AllLead to accept props
import DemoLead from '../DashboardP/Demolead';
import NewLead from '../DashboardP/NewLead';
import OpenLead from '../DashboardP/OpenLead';
import TodaysFollowup from '../DashboardP/TodaysFollowup';

import '../CSS/Main.css';
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [leads, setLeads] = useState([]);
const navigate=useNavigate();
  useEffect(() => {
    const fetchLeads = async () => {
      const res = await axios.get("http://localhost:8081/api/leads");
      setLeads(res.data);
    };
    fetchLeads();
  }, []);

  // Filtering leads based on status
  const openLeads = leads.filter(lead => lead.status === "Open");
  const newLeads = leads.filter(lead => lead.status === "New");
  const demoLeads = leads.filter(lead => lead.status === "Demo");
  const todaysFollowupLeads = leads.filter(lead => lead.status === "followup");
  // Add any other status filters as needed

  return (
   <div className="dashboard-container">
      {/* ===== HEADER ===== */}
      <div className="dashboard-header">
        <h2 className="dashboard-title">User Dashboard</h2>

        <div className="dashboard-actions">
          {/* ❌ Back Button */}
          <button
            className="close-btn"
            onClick={() => navigate("/")}
            title="Go Back"
          >
            ✕
          </button>

          {/* ➕ Add Lead */}
          <button
            className="add-btn"
            onClick={() => navigate("/createlead")}
          >
            + Add Lead
          </button>
        </div>
      </div>

      <Tabs
        defaultActiveKey="allLead"
        id="dashboard-tab"
        className="custom-tabs"
      >
        <Tab eventKey="allLead" title="All Lead">
          <AllLead leads={leads} />
        </Tab>

        <Tab eventKey="open" title="Open">
          <OpenLead leads={openLeads} />
        </Tab>

        <Tab eventKey="new" title="NewLead">
          <NewLead leads={newLeads} />
        </Tab>

        <Tab eventKey="demo" title="Demo">
          <DemoLead leads={demoLeads} />
        </Tab>

        <Tab eventKey="Followup" title="Today's followup">
          <TodaysFollowup leads={todaysFollowupLeads} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserDashboard;
