import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view'
import React, {useEffect, useState} from 'react';
import {API_KEY} from '@env'
import {FlatGrid} from "react-native-super-grid";

export default function DetailsScreen({navigation}) {
    // A state holding all the movie movieData.
    const [movieData, setMovieData] = useState([]);
    const [tvData, setTvData] = useState([]);
    const [personData, setPersonData] = useState([]);

    // Fetch movie list when component is mounted
    useEffect(() => {
        fetchMovies();
        fetchShows();
        fetchPersons();
        //console.log(process.env);
        //LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, []);

    // Function to fetch movie list
    function fetchMovies() {
        fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovieData(data.results.slice(0, 10))
            });
    }

    // Function to fetch movie list
    function fetchShows() {
        fetch(
            `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
        )
            .then((response) => response.json())
            .then((tvData) => {
                setTvData(tvData.results.slice(0, 10))
            });
    }

    // Function to fetch movie list
    function fetchPersons() {
        fetch(
            `https://api.themoviedb.org/3/trending/person/week?api_key=${API_KEY}`
        )
            .then((response) => response.json())
            .then((personData) => {
                setPersonData(personData.results.slice(0, 10))
            });
    }

    // Render function that returns the Item component
    const renderMovieItem = ({item}) => (
        <Movie
            navigation={navigation}
            movieId={item.id}
            title={item.title}
            overview={item.overview}
            img={item.poster_path}
            release={item.release_date}
            stars={item.vote_average}
        />
    );

    // Render function that returns the Item component
    const renderTvItem = ({item}) => (
        <TV
            navigation={navigation}
            movieId={item.id}
            title={item.title}
            overview={item.overview}
            img={item.poster_path}
            release={item.release_date}
            stars={item.vote_average}
        />
    );

    // Render function that returns the Item component
    const renderPersonItem = ({item}) => (
        <Person
            navigation={navigation}
            personID={item.id}
            title={item.title}
            overview={item.overview}
            img={item.profile_path}
            release={item.release_date}
            stars={item.vote_average}
        />
    );

    // Creating the view
    return (
        <View style={styles.container}>
            <Text style={styles.pageHeader}>Trending This Week</Text>

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Text style={styles.header}>Movies</Text>
                <FlatGrid
                    style={{alignItems: 'center'}}
                    itemDimension={155}
                    data={movieData}
                    renderItem={renderMovieItem}
                    keyExtractor={(item) => item.id}
                    listKey="1.1"
                />

                <Text style={styles.header}>TV - Shows</Text>
                <FlatGrid
                    style={{alignItems: 'center'}}
                    itemDimension={155}
                    data={tvData}
                    renderItem={renderTvItem}
                    keyExtractor={(item) => item.id}
                    listKey="2.1"
                />

                <Text style={styles.header}>Persons</Text>
                <FlatGrid
                    style={{alignItems: "center"}}
                    itemDimension={155}
                    data={personData}
                    renderItem={renderPersonItem}
                    keyExtractor={(item) => item.id}
                    listKey="3.1"
                />
            </ScrollView>
        </View>
    );
}

// Creating the movie component
const Movie = ({navigation, movieId, img}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate("Movie Details", {movieId,})}
    >

        <View style={styles.mediaItem}>
            <Image
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w500${img}`,}}
            />
        </View>
    </TouchableOpacity>
);

const TV = ({navigation, movieId, img}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate("Show Details", {movieId,})}
    >

        <View style={styles.mediaItem}>
            <Image
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w500${img}`,}}
            />
        </View>
    </TouchableOpacity>
);

const Person = ({navigation, personID, img}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate("Person Details", {personID,})}
    >

        <View style={styles.personItem}>

            {img != null ?
                <Image
                    style={styles.profileImage}
                    source={{uri: `https://image.tmdb.org/t/p/w500${img}`,}}
                /> : <Image
                    style={styles.profileImage}
                    source={require('../assets/Not-available.jpg')}
                />}

        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
    },
    mediaItem: {
        backgroundColor: "#EEE",
        borderRadius: 20,
        overflow: 'hidden',
    },
    personItem: {
        backgroundColor: "#EEE",
        borderRadius: 80,
        overflow: 'hidden',
    },
    image: {
        borderRadius: 20,
        width: '100%',
        height: undefined,
        aspectRatio: 0.7,
        alignSelf: 'center',

    },
    profileImage: {
        borderRadius: 80,
        width: '100%',
        height: undefined,
        aspectRatio: 0.7,
        alignSelf: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: "700",
        padding: 15,
        color: '#fff',
        textAlign: 'center'
    },
    pageHeader: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: "700",
        padding: 15,
        color: '#fff'
    }
});
