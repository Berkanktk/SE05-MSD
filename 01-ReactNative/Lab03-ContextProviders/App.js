import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {TodoProvider} from "./components/TodoContext";
import MyComponent from "./components/MyComponent";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <TodoProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="MyComponent" component={MyComponent} />
          </Stack.Navigator>
        </TodoProvider>
    </NavigationContainer>
  );
}
