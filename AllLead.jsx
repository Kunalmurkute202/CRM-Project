import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/LeadTable.css";

const  AllLead=()=> {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);


  const navigate = useNavigate()
  const fetchLeads = async () => {
    const res = await axios.get("http://localhost:8081/api/leads");
    setLeads(res.data);
  };

  const deleteLead = async (id) => {
    await axios.delete(`http://localhost:8081/api/leads/${id}`);
    fetchLeads();
  };

  return (
    <div>
      
      <h2>Lead List</h2>
      <table className="lead-table" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.id}>
              {/* changed here data-label added */}
              <td data-label="Name">{l.name}</td>
              <td data-label="Email">{l.email}</td>
              <td data-label="Contact">{l.contact}</td>
              <td data-label="City">{l.city}</td>
              <td data-label="Status">{l.status}</td>
  
              <td>
                <button onClick={() => deleteLead(l.id)}>Delete</button>
                <button onClick={()=>navigate(`/updatelead/${l.id}`)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllLead;
