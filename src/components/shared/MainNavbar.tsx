import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const MainNavbar = () => {
    return (
        <nav className="w-full flex justify-between items-centerff">
            <p className="text-lg font-semibold text-left">Task<span className="font-normal">Master</span></p>
            <div className="flex gap-x-4">
                <NavLink to='/'>Task</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div>
                <ModeToggle/>
            </div>
        </nav>
    );
};

export default MainNavbar;