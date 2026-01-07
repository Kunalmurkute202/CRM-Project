import { useState } from "react";
import axios from "axios";
import "../CSS/Email.css";

function EmailComposer() {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
    module: "LEAD"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    const params = new URLSearchParams();
    params.append("to", form.to);
    params.append("subject", form.subject);
    params.append("body", form.body);
    params.append("module", form.module);

    await axios.post("http://localhost:8081/api/crm/email/send", params);
    alert("Email sent from CRM!");
  };

  return (
    <div className="email-container" style={{ padding: 20 }}>
      <h2 className="email-title">CRM Email Module</h2>

      <select name="module" onChange={handleChange} value={form.module}>
        <option value="LEAD">Lead</option>
        <option value="TICKET">Ticket</option>
        <option value="CUSTOMER">Customer</option>
      </select>

      <input
        type="email"
        name="to"
        placeholder="Recipient Email"
        value={form.to}
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />

      <textarea
        name="body"
        placeholder="Email Content"
        value={form.body}
        onChange={handleChange}
      />

      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}

export default EmailComposer;
