import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.img`
    .logo {
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 1.8rem;
    font-weight: 700;
    }

    .logo span {
    color: #6366F1;
    }

`

interface LogoProps {
    src: string
}

const Logo = ({
    src
} : LogoProps) => {
    return (
        <StyledLogo src={src}/>
    )
}

export default Logo
