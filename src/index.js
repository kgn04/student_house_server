import * as React from "react";
import * as ReactDOM from "react-dom/client";
import SignInForm from "./pages/SignIn";
import SignUpForm from "./pages/SignUp";
import HomeView from "./pages/Home";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInForm/>,
    },
    {
        path: "/sign_up",
        element: <SignUpForm/>,
    },
    {
        path: "/home",
        element: <HomeView/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);