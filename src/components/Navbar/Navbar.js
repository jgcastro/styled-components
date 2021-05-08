import React from 'react'
import * as Styled from './Navbar.styled';

const Navbar = () => {
    return (
        <Styled.Navbar>
            <Styled.NavbarContainer>
                <Styled.NavLogo>
                    <Styled.NavIcon />
                    ULTRA
                </Styled.NavLogo>
            </Styled.NavbarContainer>
        </Styled.Navbar>
    )
}

export default Navbar
