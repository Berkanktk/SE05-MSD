import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function MyComponent() {
    useEffect(() => {
        console.log("I run everytime this component rerenders")
    })

    return (
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    )
}


