import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SigninPage";
import SignUpPage from "./pages/signupPages";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import RootPage from "./pages/RootPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
