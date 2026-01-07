import axios from "axios";
import { useEffect, useState } from "react";
import '../CSS/Main.css';
import { useNavigate } from "react-router-dom";
const OpenLead = () => {
  const [leads, setLeads] = useState([]);

  const navigate=new useNavigate();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/leads");
      const filtered = res.data.filter(lead => lead.status.toLowerCase() === "open");
      setLeads(filtered);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
    <div>
      <h2>Open Leads</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Contact</th><th>City</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.length === 0 ? (
            <tr><td colSpan="5">No open leads found</td></tr>
          ) : (
            leads.map(l => (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{l.email}</td>
                <td>{l.contact}</td>
                <td>{l.city}</td>
                <td>{l.status}</td>
                <td>
                  <button onClick={()=> navigate("/email")}>send email</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OpenLead;
