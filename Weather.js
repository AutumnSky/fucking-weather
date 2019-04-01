import React from 'react';
import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Container = styled(LinearGradient)`
flex-grow: 1;
width: 100%;
`;

const TopContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  padding: 0 30px;
  padding-bottom: 10%;
`;

const commonCSS = css`
  color: white;
  font-size: 30px;
`;

const WeatherIcon = styled.Text`${commonCSS};`;

const WeatherDegree = styled.Text`
  ${commonCSS};
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: 600;
`;

const WeatherDescH1 = styled.Text`
  ${commonCSS};
  margin-bottom: 10px;
  font-size: 50px;
`;

const WeatherDescH2 = styled.Text`
  ${commonCSS};
  font-weight: 400;
  font-size: 25px;
`;

const Weather = ({ temperature, data }) => (
  <Container colors={data.colors}>
    <TopContainer>
      <WeatherIcon>
        <MaterialCommunityIcons color="white" size={144} name={data.icon} />
      </WeatherIcon>
      <WeatherDegree>{temperature}°</WeatherDegree>
    </TopContainer>
    <BottomContainer>
      <WeatherDescH1>{data.title}</WeatherDescH1>
      <WeatherDescH2>{data.subtitle}</WeatherDescH2>
    </BottomContainer>
  </Container>
);

export default Weather;

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired
};
