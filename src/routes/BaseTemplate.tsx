
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import GlobalStyles from '../components/GlobalStyles'

const BaseTemplate = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default BaseTemplate
