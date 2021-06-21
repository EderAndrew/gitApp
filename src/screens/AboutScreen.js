/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';

//Components
import Loading from '../components/Loading';

const AboutScreen = ({route, navigation}) => {
  const {name} = route.params;

  const [loadAbout, setLoadAbout] = useState(false);
  const [uniqueUser, setUniqueUser] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      setLoadAbout(true);
      const req = await fetch(`https://api.github.com/users/${name}`);
      const json = await req.json();

      if (json) {
        setUniqueUser(json);
        setLoadAbout(false);
        console.log(uniqueUser);
      } else {
        setLoadAbout(false);
      }
    };
    loadUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loadAbout && <Loading />}
      {!loadAbout && (
        <View>
          <Text>Tela Sobre</Text>
          <Image
            style={styles.imgAvatar}
            source={{uri: uniqueUser.avatar_url}}
          />
          <Text>Login: {uniqueUser.login}</Text>
          <Text>Name: {uniqueUser.name}</Text>
          <Text>Company: {uniqueUser.company}</Text>
          <Text>Followers: {uniqueUser.followers}</Text>
          <Text>Following: {uniqueUser.following}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgAvatar: {
    width: 80,
    height: 80,
  },
});
export default AboutScreen;
