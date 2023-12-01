import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Claim from "./claim";
import Signin from "./signin";
import Dashboard from "./dashboard";
import SigninConfirmed from "./signin/confirmed";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "claim",
                element: <Claim />,
            },
            {
                path: "signin",
                element: <Signin />,
            },
            {
                path: "signin/confirmed",
                element: <SigninConfirmed />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },

            {
                path: "/",
                element: <Navigate to={`/dashboard`} />,
            },
        ],
    },
    // {
    //   path: "dashboard",
    //   element: <Dashboard />
    // }
]);
