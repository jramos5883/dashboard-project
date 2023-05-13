import { UserAuth } from "../../context/authcontext";
import { useNavigate } from "react-router-dom";

import GoogleCalendar from "../../components/googlecalendar/googlecalendar.comp";

import "./dashboard.styles.css";

const DashBoard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out.");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>I am the Dashboard!</h1>
      <h2>Account</h2>

      <h3>User Email: {user && user.email}</h3>

      <button onClick={handleLogout}>Logout</button>
      <GoogleCalendar />
    </div>
  );
};

export default DashBoard;
