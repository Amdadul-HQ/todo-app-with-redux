import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:
            }
        ]
    }
])

export default routes;