import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './InfoSection.styled';
import { Button, Container } from '../../globalStyles';
 
const InfoSection = ({ 
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headLine,
    lightText,
    topLine,
    primary,
    img,
    alt,
    start }) => {
    return (
        <Styled.InfoSec lightBg={lightBg}>
            <Container>
                <Styled.InfoRow imgStart={imgStart}>
                    <Styled.InfoColumn>
                        <Styled.TextWrapper>
                            <Styled.TopLine lightTopLine={lightTopLine}>
                                {topLine}
                            </Styled.TopLine>
                            <Styled.Heading lightText={lightText}>
                                {headLine}
                            </Styled.Heading>
                            <Styled.SubTitle lightTextDesc={lightTextDesc}>
                                {description}
                            </Styled.SubTitle>
                            <Link to='/sign-up'>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </Styled.TextWrapper>
                    </Styled.InfoColumn>
                    <Styled.InfoColumn>
                        <Styled.ImgWrapper start={start}>
                            <Styled.Img src={img} alt={alt} />
                        </Styled.ImgWrapper>
                    </Styled.InfoColumn>
                </Styled.InfoRow>
            </Container>
        </Styled.InfoSec>
    )
}

export default InfoSection
