import { createBrowserRouter } from "react-router-dom";
import RootNavLayout from "./RootNav";
import Home from "./Home";
import Portfolios from "./sections/Portfolios/portfolios";
import AllPortfolio from "./sections/AllPortfolio/allPortfolio";
import Community from "./sections/Community/community";
import SignIn from "./sections/SignIn/signIn";
import SignUp from "./sections/SignUp/signUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootNavLayout />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "aboutUs",
                element: <Portfolios />
            },
            {
                path: "portfolios",
                element: <AllPortfolio />
            },
            {
                path: "community",
                element: <Community />
            },
            {
                path: "signIn",
                element: <SignIn />
            },
            {
                path: "signUp",
                element: <SignUp />
            },
            


        ]
    }
]);


export default router