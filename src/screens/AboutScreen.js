/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Components
import Loading from '../components/Loading';
import CardAbout from '../components/CardAbout';

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
      <LinearGradient style={styles.gradient} colors={['#82B4FF', '#FA756C']}>
        {loadAbout && <Loading />}
        {!loadAbout && (
          <>
            <Text style={styles.TitleUser}>{uniqueUser.login}</Text>
            <CardAbout
              avatar={uniqueUser.avatar_url}
              login={uniqueUser.login}
              name={uniqueUser.name}
              company={uniqueUser.company}
              followers={uniqueUser.followers}
              following={uniqueUser.following}
            />
          </>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFC978',
  },
  gradient: {
    flex:1,
    width: '100%',
    alignItems:'center',
  },
  TitleUser: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#fff',
  },
});
export default AboutScreen;
