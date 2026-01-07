import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllLead from "./Components/DashboardP/AllLead";
import CreateLead from "./Components/DashboardP/CreateLead";
import UpdateLead from "./Components/DashboardP/UpdateLead";
import AddCustomers from "./Components/Main/AddCustomers";
import AdminDashboard from "./Components/Main/AdminDashboard";
import Login from "./Components/Main/Login";
import Registration from "./Components/Main/Registration";
import UserDashboard from "./Components/Main/UserDashboard";
import CustomerList from "./Components/Pages/CustomerList";
import UpdateUsers from "./Components/Pages/UpdateUsers";
import UserList from "./Components/Pages/UserList";
import CustomerDashboard from "./Components/Main/CustomerDashboard";
import AddTicket from "./Components/Customdash/AddTicket";
import TicketList from "./Components/Customdash/Ticketlist";
import UpdateTicket from "./Components/Customdash/UpdateTicket";
import AddFeedback from "./Components/Customdash/AddFeedback";
import EmailComposer from "./Components/Customdash/EmailComposer";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/userlist"  element={<UserList/>}/>
        <Route path="/alllead" element={<AllLead/>}/>
        <Route path="/updatelead/:id"  element={<UpdateLead/>}/>
        <Route path="/createlead"  element={<CreateLead/>}/>
        <Route path="/customerlist"  element={<CustomerList/>}/>
        <Route path="/update/:id"   element={<UpdateUsers/>}/>
        <Route path="/addcustomer"    element={<AddCustomers/>}/>
        <Route path="/admindash" element={<AdminDashboard/>}/>
        <Route path="/udashboard" element={<UserDashboard/>}/>
        <Route path="/ticket/add" element={<AddTicket/>}/>
        <Route path="/updateticket/:id" element={<UpdateTicket/>}/>
        <Route path="/ticketlist/all" element={<TicketList/>}/>
        <Route path="/customerdashboard" element={<CustomerDashboard/>}/>
        <Route path="/addfeedback" element={<AddFeedback/>}/> 
        <Route path="/email" element={<EmailComposer/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
