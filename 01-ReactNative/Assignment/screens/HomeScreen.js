import {useEffect, useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {API_KEY} from '@env'
import {FlatGrid} from 'react-native-super-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({navigation}) {

    // A state holding all the movie data.
    const [data, setData] = useState([]);

    // Fetch movie list when component is mounted
    useEffect(() => {
        //console.log(process.env);
        fetchMovies();
    }, []);

    // Function to fetch movie list
    function fetchMovies() {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
            .then((response) => response.json())
            .then((data) => setData(data.results));
    }

    // Render function that returns the Item component
    const renderItem = ({item}) => (
        <Item
            navigation={navigation}
            movieId={item.id}
            title={item.title}
            overview={item.overview}
            img={item.poster_path}
            release={item.release_date}
            stars={item.vote_average}
        />
    );

    // Creating the view
    return (
        <View style={styles.container}>
            <Text style={styles.pageHeader}>Most Popular</Text>
            <FlatGrid
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                spacing={10}
                itemDimension={180}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

// Creating the movie component
const Item = ({navigation, title, movieId, img, release, stars}) => (
    // console.log("Item is:" + movieId),
    <TouchableOpacity
        onPress={() => navigation.navigate("Movie Details", {movieId,})}
    >

        <View style={styles.item}>

            <View>
                <Image
                    style={styles.image}
                    source={{uri: `https://image.tmdb.org/t/p/w780${img}`,}}
                />

                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                    {title}
                </Text>

                <Text style={styles.release}>
                    {release}
                </Text>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Ionicons name='star' color="gold" size={20}/>
                    <Text style={styles.reviews}>
                        {stars}
                    </Text>
                    <Ionicons name='star' color="gold" size={20}/>
                </View>

            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515'
    },
    item: {
        backgroundColor: "#EEE",
        borderRadius: 10,

        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    title: {
        marginTop: 10,
        marginHorizontal: 10,
        fontSize: 20,
        textAlign: 'center',
        color: "#000",
    },
    release: {
        textAlign: 'center',
        color: "#888",
        marginBottom: 3,
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: undefined,
        aspectRatio: 0.7,
        alignSelf: 'center',
    },
    reviews: {
        marginHorizontal: 3,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        color: "#000",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    pageHeader: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: "700",
        padding: 15,
        color: '#fff'
    }
});
