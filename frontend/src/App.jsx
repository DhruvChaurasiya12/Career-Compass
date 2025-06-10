import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddApplication from "./pages/AddApplication";
import ResumeReview from "./pages/ResumeReview";
import JDGuidance from "./pages/JDGuidance";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";

const App = () => {
  const isAuthenticated = true; // Replace with real auth logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-application"
          element={
            <PrivateRoute>
              <AddApplication />
            </PrivateRoute>
          }
        />
        <Route
          path="/resume-review"
          element={
            <PrivateRoute>
              <ResumeReview />
            </PrivateRoute>
          }
        />
        <Route
          path="/jd-guidance"
          element={
            <PrivateRoute>
              <JDGuidance />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
