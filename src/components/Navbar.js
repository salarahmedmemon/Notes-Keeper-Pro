import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="w-full bg-zinc-800 h-15 text-white flex items-center justify-between p-8">
            <h1 className="text-sm-[1px] md:text-[1.3vw]">Notes Saver Application</h1>
            <ul className="flex items-center gap-10">
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Home</NavLink>
                <NavLink to="/notes" className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Notes</NavLink>
            </ul>
        </div>
    )
};