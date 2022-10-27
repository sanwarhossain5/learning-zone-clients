import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Authentication from "../../pages/Authentication/Authentication";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import Courses from "../../pages/Courses/Courses";
import About from "../../pages/Courses/RightSide/About";
import MyCourses from "../../pages/Courses/RightSide/MyCourses";
import Payment from "../../pages/Courses/RightSide/Payment";
import Profile from "../../pages/Courses/RightSide/Profile";
import SingleCourse from "../../pages/Courses/RightSide/SingleCourse";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import PrivateRoute from "../../pages/PrivateRoute/PrivateRoute";


//server url
// const url = 'https://learning-zone-server.vercel.app/';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Authentication />,
            },
            {
                path: '/blog',
                element: <Blog/>,
            },
            {
                path: '/faq',
                element: <Faq/>,
            },
            {
                path: '/checkout/:id',
                loader: async ({ params }) => {
                    return fetch(`https://learning-zone-server.vercel.app/courses/${params.id}`)
                },
                element: <PrivateRoute><Checkout /></PrivateRoute>,
            },
            {
                path: '/course/:id',
                loader: async ({ params }) => {
                    return fetch(`https://learning-zone-server.vercel.app/courses/${params.id}`)
                },
                element: <SingleCourse />,
            },
            {
                path: '/courses',
                element: <Courses />,
                children: [
                    {
                        index: true,
                        element: <MyCourses />,
                        loader: async () => {
                            return fetch(`https://learning-zone-server.vercel.app/courses`)
                        }
                    },
                    {
                        path: 'profile',
                        element: <Profile/>
                    },
                    {
                        path: 'about',
                        element: <About/>
                    },
                    {
                        path: 'payment',
                        element: <Payment/>
                    },
                ]
            },
        ]
    }
])