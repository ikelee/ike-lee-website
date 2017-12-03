import React from 'react';
import styled from 'styled-components'

import Journalism from '../../images/journalism.jpg'

const Img = styled.img`
  width: 100%;
  height: auto;
`

export default () => (
    <Img src={Journalism}/>
)