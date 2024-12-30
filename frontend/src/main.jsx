import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import RootPage from "./pages/RootPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>
  },
  {
    path: "/signin",
    element: <SignInPage/>
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/reset-password",
    element: <ForgotPassword/>
  },
  {
    path:"/dashboard",
    element:<DashboardLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<DashboardPage/>
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ]
  },
  
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
