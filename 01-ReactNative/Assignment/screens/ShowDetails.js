import {useEffect, useState} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {API_KEY} from '@env'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ShowScreen({route}) {
    // State holding Show data.
    const [data, setData] = useState({});
    const [genre, setGenre] = useState({});

    // Get movieID from navigate function
    const {movieId: showID} = route.params;

    // Fetch movie list when component is mounted
    useEffect(() => {
        getDetails();
        getGenres()
        // console.log("ID is: " + movieId)
    }, []);

    // Function to fetch details about the movie
    function getDetails() {
        fetch(
            `https://api.themoviedb.org/3/tv/${showID}?api_key=${API_KEY}&language=en-US`
        )
            .then((response) => response.json())
            .then((data) => setData(data)).catch(error => {
            console.log("Api call error")
        });
    }

    // Fetches movie genres
    function getGenres() {
        fetch(
            `https://api.themoviedb.org/3/tv/${showID}?api_key=${API_KEY}&language=en-US`)
            .then((response_genre) => response_genre.json())
            .then((genre) => setGenre(genre.genres[0])).catch(error => {
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
                        <Text style={styles.title}>{data.name}</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
                            <Ionicons name='star' color="gold" size={24}/>

                            <Text style={styles.reviews}>
                                {data.vote_average}
                            </Text>

                        </View>
                    </View>

                    <View>
                        {data.first_air_date !== '' ? <Text style={styles.release}>{data.first_air_date}</Text> : null}
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
                        {data.number_of_seasons === 0 ?
                            <Text style={styles.minor}>Seasons: N/A</Text>
                            :
                            <Text style={styles.minor}>Seasons: {data.number_of_seasons}</Text>
                        }
                    </View>

                    <View>
                        {data.number_of_episodes === 0 ?
                            <Text style={styles.minor}>Episodes: N/A</Text>
                            :
                            <Text style={styles.minor}>Episodes: {data.number_of_episodes}</Text>
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
        backgroundColor: '#151515'
    },
    title: {
        flex: 1,
        marginTop: 40,
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
