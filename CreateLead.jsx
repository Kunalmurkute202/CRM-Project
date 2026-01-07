import axios from "axios";
import { useState } from "react";
import { FaPhone, FaUsers } from "react-icons/fa";
import { MdEmail, MdLocationCity } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CreateLead=() =>{
  const [lead, setLead] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    status:""
  });
  const navigate= useNavigate();

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/api/leads", lead);
      alert("Lead added successfully");
      setLead({ name: "", email: "", contact: "", city: "", status:" " });
      navigate("/alllead")
    } catch (err) {
      alert("Error adding lead");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}
      style={{
        position: "relative",     // ❗ Important for placing close icon inside form
        padding: "53px",
        border: "1px solid #ccc",
        width: "400px"
      }}
      >
{/* ❌ Close button inside FORM */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "24px",
          cursor: "pointer",
          fontWeight: "bold",
          color: "red"
        }}
        onClick={() => navigate("/udashboard")}
      >
        ❌
      </div>

      <h2>Add Lead Here!</h2>

      <FaUsers /> :
      <input
        type="text"
        placeholder="enter name here"
        name="name"
        value={lead.name}
        onChange={handleChange}
        required
      />
      <br />

      <MdEmail /> :
      <input
        type="email"
        placeholder="enter email here"
        name="email"
        value={lead.email}
        onChange={handleChange}
        required
      />
      <br />

      <FaPhone /> :
      <input
        type="text"
        placeholder="enter phone here"
        name="contact"
        value={lead.contact}
        onChange={handleChange}
        required
      />
      <br />

      <MdLocationCity /> :
      <input
        type="text"
        placeholder="enter city here"
        name="city"
        value={lead.city}
        onChange={handleChange}
        required
      />
      <br />

      <select name="status" value={lead.status} onChange={handleChange}>
        <option value="Open">Open</option>
        <option value="New">New</option>
        <option value="Demo">Demo</option>
        <option value="Closed">Closed</option>
        <option value="FollowUp">FollowUp</option>
      </select>

      <br /><br />
      <button type="submit">Save Lead</button>
    </form>
  );
}

export default CreateLead;
