import React, { useEffect, useState } from "react";
import { getAllTickets, deleteTicket } from "../service/api";
import { Link } from "react-router-dom";
import axios from "axios";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    const res = await getAllTickets();
    setTickets(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTicket(id);
    loadTickets();
  };

  return (
    <div className="crm-container">
      <div className="crm-table-container"></div>
      <h3>Ticket List</h3>
      <table className="crm-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>

              <td>
                <Link to={`/updateticket/${ticket.id}`}>
                  <button>Edit</button>
                </Link>

                <button onClick={() => handleDelete(ticket.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default TicketList;
