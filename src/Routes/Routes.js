import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Authentication from "../Pages/Authentication/Authentication";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import About from "../Pages/Courses/RightSide/About";
import MyCourses from "../Pages/Courses/RightSide/MyCourses";
import Payment from "../Pages/Courses/RightSide/Payment";
import Profile from "../Pages/Courses/RightSide/Profile";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Authentication />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/courses',
                element: <Courses />,
                children: [
                    {
                        index: true,
                        element: <MyCourses />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'about',
                        element: <About />
                    },
                    {
                        path: 'payment',
                        element: <Payment />
                    },
                ]
            },
        ]
    }
])