import React, { useEffect, useState } from "react";
import { getTicketById, updateTicket } from "../service/api";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateTicket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
  });

  useEffect(() => {
    loadTicket();
  }, []);

  const loadTicket = async () => {
    const res = await getTicketById(id);
    setTicket(res.data);
  };

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try{
    await updateTicket(id, ticket);
    alert("Ticket Updated Successfully!");
  }
  catch (error) {
      console.error("Update failed:", error);
      alert("Update failed!");
  };
}
  return (
    <div className="container">
      <h3>Update Ticket</h3>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="title"
          value={ticket.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={ticket.description}
          onChange={handleChange}
        ></textarea>

        <select name="priority" value={ticket.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select name="status" value={ticket.status} onChange={handleChange}>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default UpdateTicket;
