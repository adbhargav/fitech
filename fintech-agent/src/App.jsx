import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Default route redirects to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
