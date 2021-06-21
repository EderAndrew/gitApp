/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//Components
import Card from '../components/Card';
import Loading from '../components/Loading';

const Home = ({navigation}) => {
  const [users, setUsers] = useState([]); //state para todos os usuários
  const [loading, setLoading] = useState(false); //carregar a tela quando inicia o aplicativo
  const [searchUser, setSearchUser] = useState(''); //state para o input

  const onNext = () => {
    if (searchUser !== '') {
      navigation.navigate('About', {
        name: searchUser,
      });
    } else {
      alert('Preencha o campo');
    }
  };

  useEffect(() => {
    const reqUsers = async () => {
      setLoading(true);
      const req = await fetch('https://api.github.com/users');
      const json = await req.json();

      if (json) {
        setUsers(json);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };

    reqUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      {!loading && (
        <>
          <View style={styles.logoArea}>
            <Image style={styles.logo} source={require('../img/github.png')} />
            <Text style={styles.title}>GitApp</Text>
            <View style={styles.areaSearch}>
              <TextInput
                style={styles.input}
                placeholder="Search User..."
                onChangeText={text=>setSearchUser(text)}
                value={searchUser}
              />
              <TouchableOpacity style={styles.button} onPress={onNext}>
                <Text style={styles.btnTitle}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={users}
            renderItem={({item}) => (
              <Card avatar={item.avatar_url} name={item.login} />
            )}
            keyExtractor={item => item.id}
            numColumns="2"
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoArea: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  areaSearch: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    width: '20%',
    height: 40,
    fontSize: 12,
    backgroundColor: '#D666E8',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
  },
  btnTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#A1A2A3',
    paddingLeft: 20,
    color: '#545454',
  },
});

export default Home;
