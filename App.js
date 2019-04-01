import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Loader from './Loader';
import Weather from './Weather';
import { API_KEY } from 'react-native-dotenv';
import weatherData from './data';

const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 50px;
`;

export default class App extends React.Component {
  state = {
    loading: true,
    error: null,
    temperature: null,
    data: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords: { latitude, longitude } } = position;
        this._getWeather(latitude, longitude);
      },
      (error) => {
        console.log(error);
        this.setState({
          error
        });
      }
    );
  }

  _getWeather(latitude, longitude) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        const name = json.weather[0].main;
        console.log(name);
        const data = weatherData[name] || weatherData['Rain'];
        this.setState({
          loading: false,
          temperature: json.main.temp,
          name,
          data
        });
      });
  }

  render() {
    const { loading, error, temperature, data } = this.state;
    return (
      <Container>
        <StatusBar hidden={true} />
        {error ? (
          <ErrorText>{error}</ErrorText>
        ) : loading ? (
          <Loader />
        ) : (
          <Weather temperature={Math.floor(temperature - 273.15)} data={data} />
        )}
      </Container>
    );
  }
}
