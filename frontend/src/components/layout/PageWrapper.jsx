import Navbar from './Navbar'
import './css/page-wrapper.css'

export default function PageWrapper({ children }) {
    return (
        <div className='sp-app'>
            <Navbar />

            <main className='sp-main'>
                <div className='sp-container'>
                    {children}
                </div>
            </main>
        </div>
    )
}