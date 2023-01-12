import {StatusBar} from 'expo-status-bar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import darkTheme from "@react-navigation/native/src/theming/DarkTheme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import TrendingScreen from "./screens/TrendingScreen";
import MovieDetails from "./screens/MovieDetails";
import PersonScreen from "./screens/PersonDetails";
import ShowScreen from "./screens/ShowDetails";
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{headerTransparent: true, title: '', }}>
            <Stack.Screen name="Home Page" component={HomeScreen}/>
            <Stack.Screen name="Movie Details" component={MovieDetails}/>
        </Stack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerTransparent: true, title: ''}}>
            <Stack.Screen name="Search Page" component={SearchScreen}/>
            <Stack.Screen name="Movie Details" component={MovieDetails}/>
            <Stack.Screen name="Person Details" component={PersonScreen}/>
            <Stack.Screen name="Show Details" component={ShowScreen}/>
        </Stack.Navigator>
    );
}

function TrendingStackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerTransparent: true, title: ''}}>
            <Stack.Screen name="Trending Page" component={TrendingScreen}/>
            <Stack.Screen name="Movie Details" component={MovieDetails}/>
            <Stack.Screen name="Person Details" component={PersonScreen}/>
            <Stack.Screen name="Show Details" component={ShowScreen}/>
        </Stack.Navigator>
    );
}

export default function App() {
    return (

        <NavigationContainer theme={darkTheme}>
            <View>
                <StatusBar style="auto"/>
            </View>

            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'ios-search' : 'ios-search-outline';
                        } else if (route.name === 'Trending') {
                            iconName = focused ? 'ios-trending-up' : 'ios-trending-up-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: '#FF5F1F',
                    tabBarInactiveTintColor: 'white',
                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Search" component={SearchStackScreen}/>
                <Tab.Screen name="Trending" component={TrendingStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
}

