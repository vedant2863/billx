import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/signupPages";
import SigninPage from "./pages/SigninPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
