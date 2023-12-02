import {
  createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <RootLayout /> },
      { path: "Home", element: <Home /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "ContactUs", element: <ContactUs /> },
    ],
  },
]);
