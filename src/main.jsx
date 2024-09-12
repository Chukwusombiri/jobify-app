import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import JobsPage from './pages/JobsPage';
import App from './layouts/App';
import HomePage from './pages/HomePage';
import ShowJob from './pages/ShowJob';
import jobLoader from './utils/jobloader';
import EditJob from './pages/EditJob';
import CreateJob from './pages/CreateJob';
import { toast } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "jobs",
        element: <JobsPage />,
      },      
      {
        path: "jobs/:id",
        element: <ShowJob notify={toast}/>,
        loader: jobLoader
      },
      {
        path: "jobs/new",
        element: <CreateJob  notify={toast}/>,
      },
      {
        path: "jobs/:id/edit",
        element: <EditJob notify={toast}/>,
        loader: jobLoader
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
