import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';


const DATA = [
    {
        id: "1",
        title: "First item",
    },
    {
        id: "2",
        title: "Second item",
    },
    {
        id: "3",
        title: "Third item",
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    </View>
);

export default function forLoop(){
    const renderItem = ({ item }) => <Item title={item.title} />;
    
    return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
    );
};

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
