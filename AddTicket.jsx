import React, { useState } from "react";
import axios from "axios";
 import { createTicket } from "../service/api";
import "../CSS/Customer.css";

const AddTicket = () => {
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    priority: "",
    status: "Open",
  });

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/tickets/add", ticket);
    alert("Ticket Created Successfully!");
    setTicket({ title: "", description: "", priority: "", status: "Open" });
  };

  return (
    <div className="crm-container">
      <h3>Add New Ticket</h3>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="title"
          placeholder="Ticket Title"
          value={ticket.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={ticket.description}
          onChange={handleChange}
          required
        ></textarea>

        <select name="priority" value={ticket.priority} onChange={handleChange} required>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default AddTicket;