import {createBrowserRouter, createRoutesFromElements, NavLink, Route, RouterProvider} from "react-router-dom";
import { Home } from "./reacterouterpages/Home";
import { About } from "./reacterouterpages/About";
import { Movie } from "./reacterouterpages/Movie";
import { Contact } from "./reacterouterpages/Contact";

import {Applayout} from "./routercomponents/layout/Applayout";
import {Signin} from "./routercomponents/layout/Eventsignin";
import { Signup } from "./routercomponents/layout/Eventsignup";
import { Main } from "./reacterouterpages/Main";
import { Sapplayout } from "./routercomponents/layout/Sapplayout";

import { Studentup } from "./routercomponents/layout/Studentup";
import { Studentin } from "./routercomponents/layout/Studentin";
import Surya from "./Surya";
import { Shome } from "./reacterouterpages/SHome";
const App=()=>{
    const  router =createBrowserRouter([
        {
          // >=<NavLink to="/s">student</NavLink><NavLink to="/e">event</NavLink></>,
            path:"/",
            element:<Surya/>,
            errorElement:<><h1>error page</h1>
            <NavLink to={"/"}>click</NavLink></>,
        },
        {
            path:"/e",
            element:<Applayout/>,
            errorElement:<><h1>error page</h1>
            <NavLink to={"/e/home"}>click</NavLink></>,
            children:[
                {
                    path:"/e/home",
                    element:<Home/>,
                },
                {
                   path: "/e/event/signup",
                   element: <Signup/>,
                 },
                {
                   path:"/e/event/signin",
                   element:<Signin/>,
               },
                {
                    path:"/e/about",
                    element:<About/>,
                },
                {
                    path:"/e/movie",
                    element:<Movie/>,
                },
                {
                    path:"/e/contact",
                    element:<Contact/>,
                }
            ]
        },
        {
           path:"/s",
           element:<Sapplayout/>,
           errorElement:<><h1>error page</h1>
           <NavLink to={"/s"}>click</NavLink></>,
           children:[
              
               {
                   path:"/s/home",
                   element:<Shome/>,
               },
               {
                  path: "/s/signup",
                  element: <Studentup/>,
                },
               {
                  path:"/s/signin",
                  element:<Studentin/>,
              },
               {
                   path:"/s/about",
                   element:<About/>,
               },
               {
                   path:"/s/movie",
                   element:<Movie/>,
               },
               {
                   path:"/s/contact",
                   element:<Contact/>,
               }
           ]
        },
        
    ]);

    return <RouterProvider router={router}/>;
 };
 export default App;
 