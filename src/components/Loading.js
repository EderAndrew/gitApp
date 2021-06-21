/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';

const Loading = props => {
  return (
    <View style={styles.containerLoading}>
      <Image
        style={styles.logoLoading}
        source={require('../img/github.png')}
      />
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLoading: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
});

export default Loading;
