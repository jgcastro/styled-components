import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import * as Styled from './Pricing.styled';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <Styled.PricingSection>
        <Styled.PricingWrapper>
          <Styled.PricingHeading>Our Services</Styled.PricingHeading>
          <Styled.PricingContainer>
            <Styled.PricingCard to='/sign-up'>
              <Styled.PricingCardInfo>
                <Styled.PricingCardIcon>
                  <GiRock />
                </Styled.PricingCardIcon>
                <Styled.PricingCardPlan>Starter Pack</Styled.PricingCardPlan>
                <Styled.PricingCardCost>$99.99</Styled.PricingCardCost>
                <Styled.PricingCardLength>per month</Styled.PricingCardLength>
                <Styled.PricingCardFeatures>
                  <Styled.PricingCardFeature>100 New Users</Styled.PricingCardFeature>
                  <Styled.PricingCardFeature>$10,000 Budget</Styled.PricingCardFeature>
                  <Styled.PricingCardFeature>Retargeting analytics</Styled.PricingCardFeature>
                </Styled.PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </Styled.PricingCardInfo>
            </Styled.PricingCard>
            <Styled.PricingCard to='/sign-up'>
              <Styled.PricingCardInfo>
                <Styled.PricingCardIcon>
                  <GiCrystalBars />
                </Styled.PricingCardIcon>
                <Styled.PricingCardPlan>Gold Rush</Styled.PricingCardPlan>
                <Styled.PricingCardCost>$299.99</Styled.PricingCardCost>
                <Styled.PricingCardLength>per month</Styled.PricingCardLength>
                <Styled.PricingCardFeatures>
                  <Styled.PricingCardFeature>1000 New Users</Styled.PricingCardFeature>
                  <Styled.PricingCardFeature>$50,000 Budget</Styled.PricingCardFeature>
                  <Styled.PricingCardFeature>Lead Gen Analytics</Styled.PricingCardFeature>
                </Styled.PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </Styled.PricingCardInfo>
            </Styled.PricingCard>
            <Styled.PricingCard to='/sign-up'>
              <Styled.PricingCardInfo>
                <Styled.PricingCardIcon>
                  <GiCutDiamond />
                </Styled.PricingCardIcon>
                <Styled.PricingCardPlan>Diamond Kings</Styled.PricingCardPlan>
                <Styled.PricingCardCost>$999.99</Styled.PricingCardCost>
                <Styled.PricingCardLength>per month</Styled.PricingCardLength>
                <Styled.PricingCardFeatures>
                  <Styled.PricingCardFeature>Unlimited Users</Styled.PricingCardFeature>
                  <Styled.PricingCardFeature>Unlimited Budget</Styled.PricingCardFeature>
                  <Styled.PricingCardFeature>24/7 Support</Styled.PricingCardFeature>
                </Styled.PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </Styled.PricingCardInfo>
            </Styled.PricingCard>
          </Styled.PricingContainer>
        </Styled.PricingWrapper>
      </Styled.PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;