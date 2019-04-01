import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';

const SLinearGradient = styled(LinearGradient)`
  width: 100%;
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
  <SLinearGradient colors={[ '#fff7dd', '#ffeaa7' ]}>
    <SText>Loading Data...</SText>
  </SLinearGradient>
);
