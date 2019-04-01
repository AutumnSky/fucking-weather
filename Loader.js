import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-grow: 1;
  display: flex;
  background-color: #ffeaa7;
  justify-content: flex-end;
  padding: 80px 50px;
`;

const SText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export default () => (
  <Container>
    <SText>Loading Data...</SText>
  </Container>
);
