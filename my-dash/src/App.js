import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.comp";
import HomePage from "./routes/homepage/homepage.comp";
import AuthPage from "./routes/authpage/authpage.comp";
import DashBoard from "./routes/dashboard/dashboard.comp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
  );
}

export default App;
