import App from "@/App";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Task/>
            },
            {
                path:"/users",
                element:<Users/>
            }
        ]
    }
])

export default routes;