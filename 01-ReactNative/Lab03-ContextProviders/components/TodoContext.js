import { StyleSheet, Text, View, Button, Alert, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

const  TodoContext = React.createContext({});

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    return (
        <TodoContext.Provider
            value={{
                todos,
                setTodos,
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export default { TodoContext }

export {TodoProvider}

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
