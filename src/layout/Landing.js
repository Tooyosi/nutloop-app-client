import React from 'react'
import { Container } from 'reactstrap'
import { AuthGuard } from '../routes/guards/AuthGuard'

export default function Landing({ children }) {
    return (
        <AuthGuard>
            <div className="auth-bg">
                <Container fluid>
                    {children}
                </Container>
            </div>
        </AuthGuard>
    )
}
