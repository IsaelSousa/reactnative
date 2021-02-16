import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function New() {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Image />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{

  }  
})