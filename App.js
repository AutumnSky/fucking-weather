import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loader from './Loader';

export default class App extends React.Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading ? <Loader /> : <Text>11Open up App.js to start working on your app!</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
