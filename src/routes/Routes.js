import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyError from "../pages/404/MyError";
import Blogs from "../pages/Blogs/Blogs";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Category/Category";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";

import SignUp from "../pages/SignUp/SignUp";
import SingleBlog from "../pages/SingleBlog/SingleBlog";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },

               
 
            {
                path : '/blogs/:id',
                loader: async({params}) => {
                    return fetch(`http://localhost:5000/blogs/${params.id}`)
                  },
                element : <SingleBlog></SingleBlog>
            },
            {
                path : '/category/:id',
                // loader: async({params}) => {
                //     return fetch(`http://localhost:5000/categories/${params.id}`)
                //   },
                element : <Category></Category>
            },
            {
                path : '/categories',
                
                element : <Categories></Categories>
            },
            {
                path : '/blogs',
                loader: async () => {
                    return fetch(`http://localhost:5000/blogs/`)
                  },
                element : <Blogs></Blogs>
            },

            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
 
        ]
    },
    { path: '*', element: <MyError></MyError> }
])