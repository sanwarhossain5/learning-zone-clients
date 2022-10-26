import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Authentication from "../../pages/Authentication/Authentication";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import About from "../../pages/Courses/RightSide/About";
import MyCourses from "../../pages/Courses/RightSide/MyCourses";
import Payment from "../../pages/Courses/RightSide/Payment";
import Profile from "../../pages/Courses/RightSide/Profile";
import Home from "../../pages/Home/Home";


export const routes = createBrowserRouter([
  {
    path: '*',
    element: <div className="text-center">This Route Not Found</div>
  },
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