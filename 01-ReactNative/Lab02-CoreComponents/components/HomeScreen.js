import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    const DATA = [
        {
            id: "1",
            title: "First item",
            desc: "Lorem ipsum dolor...",
        },
        {
            id: "2",
            title: "Second item",
            desc: "Lorem ipsum dolor...",
        },
        {
            id: "3",
            title: "Third item",
            desc: "Lorem ipsum dolor...",
        },
    ];

    const renderItem = ({ item }) => (
        <Item navigation={navigation} movieId={item.id} title={item.title} />
      );

      return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const Item = ({ title, navigation, movieID }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {movieID,})}
      />
    </View>
);

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#393939",
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
