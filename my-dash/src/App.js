import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.comp";
import DashBoard from "./routes/dashboard/dashboard.comp";
import AuthPage from "./routes/authpage/authpage.comp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<DashBoard />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}

export default App;
