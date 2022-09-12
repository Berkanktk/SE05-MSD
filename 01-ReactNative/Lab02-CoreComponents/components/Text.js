import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

const items = [
    {
        name: "hello",
    },
    {
        name: "hello again",
    },
    {
        name: "hello again and again",
    },
];

export default function forLoops({ text }) {
    return (
        <View>
            {items.map((item) => (
                <Text>{item.name}</Text>
            ))}
        </View>
    )
}



