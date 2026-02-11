import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import './css/admin-layout.css'

export default function AdminLayout () {
    const { isMobile, isTablet } = useBreakPoint();
    const [ collapsed, setCollapsed ] = useState(false);
    const [ mobileOpen, setMobileOpen ] = useState(false);

    // Auto-collapse logic
    useEffect(() => {
        if (isMobile) {
            setCollapsed(false);
        } else if (isTablet) {
            setCollapsed(true);
        } else {
            setCollapsed(false)
        }
    }, [isMobile, isTablet]);

    const sidebarWidth = collapsed ? 80: 300;

    return (
        <div className="admin-layout" style={{ display: 'flex', height: '100vh'}}>

            {/* Sidebar */}
            <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

            {/* Main area */}
            <div className="admin-main" style={{ flexGrow: 1, marginLeft: isMobile ? 0 : sidebarWidth, transition: 'margin-left 0.25s ease'}}>
                <Topbar collapsed={collapsed} setCollapsed={setCollapsed} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

                <div className="admin-content" style={{ padding: '20px'}}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}