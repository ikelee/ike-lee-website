import React from 'react';
import styled from 'styled-components'

import Journalism from '../../images/journalism.jpg'

const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  max-width: 100vw;
  max-height: inherit; 
`
const Title = styled.div`
  font-family: 'GraphikWeb',-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 120px;
  color: #000000;
  position: absolute;
  text-align: center;
  vertical-align: middle;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`
export default () => (
  <FlexBox>
    <Img src={Journalism}/>
    <Title>Journalism</Title>
  </FlexBox>
)