import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import StaffLoginPage from "./pages/StaffLoginPage";
import Navbar from "./components/Navbar";
import StaffDashboard from "./pages/StaffDashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/staff-login" element={<StaffLoginPage />} />
        <Route path="/dashboard" element={<StaffDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
