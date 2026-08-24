// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { staff } = useAuth(); // or however you check logged-in state
  if (!staff) return <Navigate to="/staff-login" replace />;
  return children;
}

export default ProtectedRoute;
