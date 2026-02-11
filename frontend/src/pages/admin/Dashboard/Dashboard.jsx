import PageWrapper from "../../../components/layout/PageWrapper";
import './dashboard.css'

export default function Dashboard() {
    return (
        <PageWrapper>
            <div className="sp-dashboard">
                <h1 className="title sp-dashboard-title">Dashboard</h1>

                <p className="sp-dashboard-subtitle">
                    Welcome to the Measured & Made Admin Panel. Use the navigation to manage users, view system activity, and configure your application.
                </p>

                <div className="sp-dashboard-cards">
                    <div className="sp-card">
                        <h2 className="sp-card-title">Users</h2>
                        <p className="sp-card-text">Create, edit, and manage user accounts.</p>
                    </div>
                    <div className="sp-card">
                        <h2 className="sp-card-title">System Status</h2>
                        <p className="sp-card-text">Monitor API health and backend activity.</p>
                    </div>
                    <div className="sp-card">
                        <h2 className="sp-card-title">Settings</h2>
                        <p className="sp-card-text">Configure roles, permissions, and preferences.</p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}