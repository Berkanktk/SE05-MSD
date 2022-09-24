import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, [])

    function fetchTodos () {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    const renderItem = ({ item }) => (
        <Item navigation={navigation} todoID={item.id} title={item.title} />
      );

    return (
      <View>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
      </View>

    );
};

const Item = ({ title, navigation, todoID }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>

        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {todoID,})}
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
