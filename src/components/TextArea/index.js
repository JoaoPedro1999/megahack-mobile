/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TArea } from './styles';

Icon.loadFont();

function TextArea({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      <TArea {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(TextArea);
