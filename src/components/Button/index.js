/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="rgba(34, 33, 91, 0.6)" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}
