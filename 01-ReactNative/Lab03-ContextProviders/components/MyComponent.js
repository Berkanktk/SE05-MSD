import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {useState, useEffect, useContext} from 'react';
import TodoContext, {TodoProvider} from "./TodoContext";

export default function MyComponent() {

    const  {setTodos, todos} = useContext(TodoProvider)

    useEffect(() => {
        console.log(todos)
        console.log(setTodos)
        console.log("I run everytime this component rerenders")
    })

    return (
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    )
}


