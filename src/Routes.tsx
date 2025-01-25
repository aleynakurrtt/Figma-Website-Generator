import { createBrowserRouter } from "react-router-dom";
import RootNavLayout from "./RootNav";
import Home from "./Home";
import Portfolios from "./sections/Portfolios/portfolios";
import AllPortfolio from "./sections/AllPortfolio/allPortfolio";
import Community from "./sections/Community/community";


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
            


        ]
    }
]);


export default router