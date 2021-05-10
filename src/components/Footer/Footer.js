import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

import * as Styled from './Footer.styled';
import { Button } from '../../globalStyles';

const Footer = () => {
    return (
        <Styled.FooterContainer>
            <Styled.FooterSubscription>
                <Styled.FooterSubHeading>
                    Join our exclisive membership to receive the latest news and trends
                </Styled.FooterSubHeading>
                <Styled.FooterSubText>
                    You can unsubscribe at any time.
                </Styled.FooterSubText>
                <Styled.Form>
                    <Styled.FormInput
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                        <Button fontBig>Subscribe</Button>
                </Styled.Form>
            </Styled.FooterSubscription>
            <Styled.FooterLinksContainer>
                <Styled.FooterLinksWrapper>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>About Us</Styled.FooterLinkTitle>
                        <Styled.FooterLink to='/sign-up'>How it works</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Testimonials</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Careers</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Investors</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Terms of Service</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>Contact Us</Styled.FooterLinkTitle>
                        <Styled.FooterLink to='/'>Contact</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Support</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Destinations</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Sponsorships</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                </Styled.FooterLinksWrapper>
                <Styled.FooterLinksWrapper>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>Videos</Styled.FooterLinkTitle>
                        <Styled.FooterLink to='/'>Submit Video</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Ambassadors</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Agency</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Influencer</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                    <Styled.FooterLinksItems>
                        <Styled.FooterLinkTitle>Social Media</Styled.FooterLinkTitle>
                        <Styled.FooterLink to='/'>FaceBook</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Instagram</Styled.FooterLink>
                        <Styled.FooterLink to='/'>Twitter</Styled.FooterLink>
                        <Styled.FooterLink to='/'>YouTube</Styled.FooterLink>
                    </Styled.FooterLinksItems>
                </Styled.FooterLinksWrapper>
            </Styled.FooterLinksContainer>
            <Styled.SocialMedia>
                <Styled.SocialMediaWrap>
                    <Styled.SocialLogo to='/'>
                        <Styled.SocialIcon />
                        ULTRA
                    </Styled.SocialLogo>
                    <Styled.WebsiteRights>
                        ULTRA &copy; 2021
                    </Styled.WebsiteRights>
                    <Styled.SocialIcons>
                        <Styled.SocialIconLink href='#' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </Styled.SocialIconLink>
                        <Styled.SocialIconLink href='#' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </Styled.SocialIconLink>
                        <Styled.SocialIconLink href='#' target='_blank' aria-label='YouTube'>
                            <FaYoutube />
                        </Styled.SocialIconLink>
                        <Styled.SocialIconLink href='#' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </Styled.SocialIconLink>
                        <Styled.SocialIconLink href='#' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </Styled.SocialIconLink>
                    </Styled.SocialIcons>
                </Styled.SocialMediaWrap>
            </Styled.SocialMedia>
        </Styled.FooterContainer>
    )
}

export default Footer
