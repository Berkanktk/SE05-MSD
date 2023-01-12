import {useEffect, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import {API_KEY} from '@env'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MovieDetails({route, navigation}) {
    // State holding movie data.
    const [data, setData] = useState({});
    const [genre, setGenre] = useState({});

    // Get movieID from navigate function
    const {movieId} = route.params;

    // Fetch movie list when component is mounted
    useEffect(() => {
        // console.log("ID is: " + movieId)
        getDetails();
        getGenres()

    }, []);

    // Function to fetch details about the movie
    function getDetails() {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        )
            .then((response) => response.json())
            .then((data) => setData(data)).catch(error => {
            console.log("Api call error")
        });
    }

    // Fetches movie genres
    function getGenres() {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then((response_genre) => response_genre.json())
            .then((data) => setGenre(data.genres[0])).catch(error => {
            console.log("Api call error");
        });
    }

    // Creating the view
    return (
        <View style={styles.container}>
            <ScrollView>

                {data.backdrop_path != null ?
                    <Image
                        style={styles.image}
                        source={{uri: `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`,}}
                    /> : null}

                <View style={styles.text}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -40}}>

                        <View>
                            {data.backdrop_path !== null ?
                                <Text style={styles.title}>{data.title}</Text>
                                :
                                <Text style={styles.titleNoImg}>{data.title}</Text>}
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
                            <Ionicons name='star' color="gold" size={24}/>

                            <Text style={styles.reviews}>
                                {data.vote_average}
                            </Text>

                        </View>
                    </View>

                    <View>
                        {data.release_date !== '' && data.runtime !== 0 ?
                            <Text style={styles.release}>{data.release_date} | {data.runtime} min.</Text> : null}
                    </View>

                    <View>
                        {data.tagline !== '' ? <Text style={{
                            justifyContent: 'center',
                            color: '#fff',
                            marginBottom: 10,
                            fontStyle: 'italic'
                        }}>"{data.tagline}"</Text> : null}
                    </View>

                    <View>
                        {data.overview !== ''?
                            <Text style={styles.overview}>{data.overview}</Text> : null}
                    </View>


                    <Text> </Text>

                    <View>
                        {data.adult === false ?
                            <Text style={styles.minor}>For Adults.</Text>
                            :
                            <Text style={styles.minor}>For Everyone.</Text>
                        }
                    </View>

                    <Text> </Text>

                    <View>
                        {data.budget === 0 ?
                            <Text style={styles.minor}>Budget: N/A</Text>
                            :
                            <Text style={styles.minor}>Budget: ${data.budget}</Text>
                        }
                    </View>

                    <View>
                        {data.revenue === 0 ?
                            <Text style={styles.minor}>Budget: N/A</Text>
                            :
                            <Text style={styles.minor}>Revenue: ${data.revenue}</Text>
                        }
                    </View>

                    <Text> </Text>

                    <View>
                        {typeof genre !== 'undefined' ? <Text style={styles.minor}>Genre: {genre.name}</Text> : null}
                    </View>

                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        backgroundColor: '#151515'
    },
    title: {
        flex: 1,
        marginTop: 40,
        fontSize: 28,
        color: '#fff',
    },
    titleNoImg: {
        flex: 1,
        marginTop: 120,
        fontSize: 28,
        color: '#fff',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/3,
        alignSelf: 'center',
    },
    release: {
        color: '#fff',
        marginTop: 2,
        marginBottom: 10,
    },
    reviews: {
        marginLeft: 3,
        textAlign: 'center',
        fontSize: 24,
        color: '#fff',
    },
    overview: {
        fontSize: 16,
        color: '#fff'
    },
    minor: {
        fontSize: 14,
        color: '#fff'
    },
    text: {
        padding: 20,
    }
});
