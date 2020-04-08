/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TInput } from './styles';

Icon.loadFont();

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      <Icon name={icon} size={20} color="rgba(34, 33, 91, 0.6)" />
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
