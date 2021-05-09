import React, { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import * as Styled from './Navbar.styled';

const Navbar = () => {
    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <Styled.Navbar>
            <Styled.NavbarContainer>
                <Styled.NavLogo to='/'>
                    <Styled.NavIcon />
                    ULTRA
                </Styled.NavLogo>
                <Styled.MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </Styled.MobileIcon>
                <Styled.NavMenu onClick={handleClick} click={click}>
                    <Styled.NavItem>
                        <Styled.NavLinks to='/'>
                            Home
                        </Styled.NavLinks>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Styled.NavLinks to='/services'>
                            Services
                        </Styled.NavLinks>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Styled.NavLinks to='/products'>
                            Products
                        </Styled.NavLinks>
                    </Styled.NavItem>
                    <Styled.NavItemBtn>
                        {button ? (
                            <Styled.NavBtnLink to='/sign-up'>
                                <Button primary>SIGN UP</Button>
                            </Styled.NavBtnLink>
                        ) : (
                            <Styled.NavBtnLink to='/sign-up'>
                                <Button fontBig primary>
                                    SIGN IN
                                </Button>
                            </Styled.NavBtnLink>
                        )}
                    </Styled.NavItemBtn>
                </Styled.NavMenu>
            </Styled.NavbarContainer>
        </Styled.Navbar>
    )
}

export default Navbar
