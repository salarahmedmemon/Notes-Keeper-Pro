import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Notes } from "./components/Notes";
import { ViewNote } from "./components/ViewNote";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element:
                <>
                    <Navbar />
                    <Home />
                </>
        },
        {
            path: '/notes',
            element:
                <>
                    <Navbar />
                    <Notes />
                </>
        },
        {
            path: '/notes/:id',
            element:
                <>
                    <Navbar />
                    <ViewNote />
                </>
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
};