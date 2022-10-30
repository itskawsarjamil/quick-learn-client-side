import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Courses from "../../Pages/All/Courses";
import Course from "../../Pages/Course/Course";
import Checkout from "../../Pages/Checkout/Checkout";
import Fourofour from "../../Pages/404/Fourofour";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://quick-learn-server-2.vercel.app/course')
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://quick-learn-server-2.vercel.app/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://quick-learn-server-2.vercel.app/course/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Course></Course> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://quick-learn-server-2.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <Fourofour></Fourofour>,
    }
])