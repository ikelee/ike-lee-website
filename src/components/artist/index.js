import React from 'react';
import styled from 'styled-components'

import Artist from '../../images/artist.jpg'

const Img = styled.img`
  width: 100%;
  height: auto;
`

export default () => (
    <Img src={Artist}/>
)