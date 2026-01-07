import axios from 'axios';
// 🔥 Add interceptor RIGHT AFTER axios import
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // get JWT

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const base_Url ="http://localhost:8081/api/users" ;

export const addUser=async(users)=> await  axios.post(base_Url , users)
export const getAllUsers=async()=> await axios.get(base_Url);
export const getUserById=async(id)=> await axios.get(`${base_Url}/${id}`)
export const deleteUserById = async(id)=> await axios.delete(`${base_Url}/${id}`)
export const updateUser =async(id, users)=> await axios.put(`${base_Url}/${id}` , users)



export const addCustomer=async(customers)=> await axios.post(base_Url , customers)
export const getAllCustomers=async()=> await axios.get(base_Url)
export const getCustomerById=async(id)=> await axios.get(`${base_Url}/${id}`)
export const updateCustomer =async(id, customers)=>  await axios.put(`${base_Url}/${id}` , customers)
export const deleteCustomer = async(id)=>await axios.delete(`${base_Url}/${id}`);


// LOGIN API
const AUTH_URL = "http://localhost:8081/api/auth";
export const loginUser = async (user) =>await axios.post(`${AUTH_URL}/login`, user);

const Base_URLLead ="http://localhost:8081/api/leads";
export const getAlllead=async()=> await axios.get(Base_URLLead);
export const createLead=async(leads)=> await axios.post(Base_URLLead , leads)
export const deleteLead=async(id)=> await axios.delete(`${Base_URLLead}/${id}`)
export const updateLead=async(id, leads)=>await axios.put(`${Base_URLLead}/${id}`, leads)

const base_UrlTicket="http://localhost:8081/tickets"
export const createTicket = async(ticket) => await axios.post(`${base_UrlTicket}/add`, ticket);
export const getAllTickets = async() => await axios.get(`${base_UrlTicket}/all`);
export const getTicketById = async(id) => await axios.get(`${base_UrlTicket}/${id}`);
export const updateTicket = async(id, ticket) => await axios.put(`${base_UrlTicket}/update/${id}`, ticket);
export const deleteTicket = async(id) => await axios.delete(`${base_UrlTicket}/delete/${id}`);


const BASE_URLfeedback = "http://localhost:8081/feedback";
export const getAllFeedback = async () => await axios.get(BASE_URLfeedback);
export const addFeedback = async (feedback) => await axios.post(BASE_URLfeedback, feedback);

const Base_Urlemail="http://localhost:8081/api/crm/email";
export const sendEmail = async (email) =>
  await axios.post(`${Base_Urlemail}/send`, email);

// Get All Email Logs
export const getAllEmails = async () =>
  await axios.get(`${Base_Urlemail}/logs`);

// Get Email Log by ID
export const getEmailById = async (id) =>
  await axios.get(`${Base_Urlemail}/logs/${id}`);

// Delete Email Log
export const deleteEmail = async (id) =>
  await axios.delete(`${Base_Urlemail}/delete/${id}`);
