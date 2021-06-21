/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View style={styles.avatarArea}>
      <Image style={styles.avatar} source={{uri: props.avatar}} />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarArea: {
    width: '50%',
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderBottomRightRadius:20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#769AD0',
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: '#82B4FF',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor:'#FFF',
  },
  name: {
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  }
});

export default Card;
