import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/signupPages";
import SigninPage from "./pages/SigninPage";
import RootPage from "./pages/RootPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
