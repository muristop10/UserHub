
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import GlobalStyles from '../components/GlobalStyles'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BaseTemplate = () => {
    return (
        <>
            <GlobalStyles />
            <ToastContainer />

            <Container>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Container>

        </>
    )
}

export default BaseTemplate
