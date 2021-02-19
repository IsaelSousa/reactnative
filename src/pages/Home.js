import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'

import New from '../components/New';

export default function Home() {
  const navigation = useNavigation()

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#FFF'}}
    >

      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="O que está procurando?" style={styles.input} />
        </View>
      </View>

      <View style={styles.containerNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
        <New
          cover={require('../assets/house1.jpg')}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hrs"
          price="R$1.204,39"
          onPress={() => navigation.navigate('Detail')}
        />
        <New
          cover={require('../assets/house2.jpg')}
          name="Casa Floripa"
          description="Casa nova, só falta o morador"
          price="R$2.000,00"
          onPress={() => { }}
        />
        <New
          cover={require('../assets/house3.jpg')}
          name="Home Deluxe"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hrs"
          price="R$5.000,00"
          onPress={() => { }}
        />
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },

  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    height: 37,
    backgroundColor: "#FFF",
    elevation: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '98%'
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
})