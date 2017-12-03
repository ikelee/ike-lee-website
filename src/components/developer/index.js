import React from 'react';
import styled from 'styled-components'

import Developer from '../../images/developer.png'

const Img = styled.img`
  width: 100%;
  height: auto;
`

export default () => (
    <Img src={Developer}/>
)