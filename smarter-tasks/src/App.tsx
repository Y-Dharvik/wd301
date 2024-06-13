import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Signin from "./pages/signin";
import ProtectedRoute from "./ProtectedRoute";
import Notfound from "./pages/Notfound";
import Signup from './pages/signup';
import Dashboard from "./pages/dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    //any path other than the availableRoutes will redirect to the notFound page
    path: "*",
    element: <Navigate to="/notfound" replace />,
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App