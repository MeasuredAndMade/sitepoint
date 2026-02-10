import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Dashboard from '../pages/Dashboard/Dashboard'
import CreateUser from '../pages/CreateUser/CreateUser'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/create-user' element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    )
}