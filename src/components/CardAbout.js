/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CardAbout = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerCard}>
      <View style={styles.avatarContainer}>
        <Image style={styles.imgAvatar} source={{uri: props.avatar}} />
        <View style={styles.cardAvatar}>
          <Text style={styles.login}>Login: {props.login}</Text>
          <Text style={styles.nome}>Name: {props.name}</Text>
        </View>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.info}>
          <Text style={styles.titleInfo}>INFO</Text>
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.infoText}>Company: {props.company}</Text>
          <Text style={styles.infoText}>Followers: {props.followers}</Text>
          <Text style={styles.infoText}>Following: {props.following}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnBack} onPress={()=>navigation.goBack()}>
          <Text style={styles.titleBtn}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    width: '80%',
    backgroundColor: '#FFF',
    marginTop: 80,
    marginBottom: 220,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#545454',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  },
  imgAvatar: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  cardAvatar: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  login: {
    fontWeight: 'bold',
    color: '#545454',
    fontSize: 16,
  },
  nome: {
    fontWeight: 'bold',
    color: '#545454',
  },
  infoCard: {
    marginTop: 20,
  },
  info: {
    alignItems: 'center',
  },
  titleInfo: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFC978',
  },
  infoContent: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    borderColor: '#FFC978',
  },
  infoText: {
    fontWeight: 'bold',
    color: '#545454',
  },
  btnBack: {
    maxWidth: '100%',
    width: '60%',
    height: 50,
    justifyContent: 'center',
    marginTop: 60,
    alignItems: 'center',
    backgroundColor:'#49C865',
    alignSelf: 'center',
    borderRadius: 50,
  },
  titleBtn: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CardAbout;
