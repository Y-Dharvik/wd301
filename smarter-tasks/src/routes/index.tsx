import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoute";
// import Notfound from "../pages/Notfound";
// import ProjectContainer from "../pages/projects";

//import Signin from "../pages/signin"
//import Signup from "../pages/signup"
//import Projects from "../pages/projects"
//import Members from "../pages/members"
// import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
import ProjectContainer from "../pages/projects/ProjectContainer";
// import ProjectDetails from "../pages/project_details";
// import NewTask from "../pages/tasks/NewTask";
// import TaskDetailsContainer from "../pages/tasks/TaskDetailsContainer";

const Signin = React.lazy(() => import("../pages/signin"));
const Signup = React.lazy(() => import("../pages/signup"));
const Projects = React.lazy(() => import("../pages/projects"));
const Members = React.lazy(() => import("../pages/members"));
const Logout = React.lazy(() => import("../pages/logout"));
const ProjectDetails = React.lazy(() => import("../pages/project_details"));
const NewTask = React.lazy(() => import("../pages/tasks/NewTask"));
const TaskDetailsContainer = React.lazy(
  () => import("../pages/tasks/TaskDetailsContainer")
);


let authenticated = !!localStorage.getItem("authToken");
const checkAuth = () => {
  authenticated = !!localStorage.getItem("authToken");
  if (authenticated) {
    return <Navigate to="/account/projects" replace />;    
    
  }else{
    return <Navigate to="/signin" replace />;
  }
}


const router = createBrowserRouter([
  { 
    path: "/", 
    element: checkAuth(),
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  // Protected Routes
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    ErrorBoundary: () => <>Failed to load the page</>,
    children: [
      { 
        index: true, 
        element: <Navigate to="/account/projects" replace /> 
      },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: <ProjectDetails />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" /> },
                  {
                    path: "new",
                    element: <NewTask />,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <TaskDetailsContainer /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: (<Members />)
      },
    ],
  },
  {
    path: "/notfound",
    element: <Notfound />
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />
  }
]);

export default router;
