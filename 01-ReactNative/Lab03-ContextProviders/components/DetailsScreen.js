import {StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import { useState, useEffect } from 'react';

export default function DetailsScreen({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('Home')}
        />

          <ActivityIndicator />
          <ActivityIndicator size="small"/>
          <ActivityIndicator size="large"/>
          <ActivityIndicator size="small" color="#00ff00"/>
          <ActivityIndicator size="small" color="#ff0000"/>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    item: {
      backgroundColor: "#EEE",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 15,

      shadowColor: '#000',
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 0.5,
      elevation: 1

    },
    title: {
      fontSize: 24,
    },
  });
