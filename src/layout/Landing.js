import React from 'react'
import { Container } from 'reactstrap'
import { AuthGuard } from '../routes/guards/AuthGuard'
import Main from '../components/common/Main'
import Navbar from '../components/defaults/Navbar'

export default function Landing({ children }) {
    return (
        <Container fluid>
            <Main>
                {/* <Navbar /> */}
            {children}
            </Main>
        </Container>
    )
}
