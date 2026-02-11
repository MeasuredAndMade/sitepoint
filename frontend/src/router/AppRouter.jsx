import { createBrowserRouter } from "react-router-dom";

// Layouts
import AdminLayout from "../layouts/AdminLayout";

// Admin Pages
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import Users from '../pages/admin/Users/Users'
import Register from '../pages/public/Register/Register'

const router = createBrowserRouter([
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'users', element: <Users />}
        ]
    }
]);