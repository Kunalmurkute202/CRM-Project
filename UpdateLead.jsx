import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateLead() {

  const { id } = useParams();    // ✅ get id from URL
  const navigate = useNavigate();

  const [lead, setLead] = useState({
    name: "",
    email: "",
    contact: "",
    status: ""
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`http://localhost:8081/api/leads/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setLead(res.data);
        // setLead({
        //   name: res.data.name,
        //   email: res.data.email,
        //   contact: res.data.contact,
        //   status: res.data.status
        // });

      } catch (err) {
        console.error("Error Loading lead:", err);
      }
    };

    if (id) fetchLead();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.put(`http://localhost:8081/api/leads/${id}`, lead, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Lead updated");
      navigate("/leads");

    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to Update lead");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Lead</h2>
      <input name="name" value={lead.name} onChange={handleChange} />
      <input name="email" value={lead.email} onChange={handleChange} />
      <input name="contact" value={lead.contact} onChange={handleChange} />
      <input name="status" value={lead.status} onChange={handleChange} />
      <button type="submit">Update Lead</button>
    </form>
  );
}

export default UpdateLead;
