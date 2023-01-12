import {Image, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_KEY} from '@env'
import Ionicons from "react-native-vector-icons/Ionicons";


export default function DetailsScreen({route}) {
    const [data, setData] = useState({});

    // Get movieID from navigate function
    const {personID} = route.params;

    useEffect(() => {
        getDetails();
        //console.log(personID)
    }, []);

    // Function to fetch details about the movie
    function getDetails() {
        fetch(
            `https://api.themoviedb.org/3/person/${personID}?api_key=${API_KEY}&language=en-US`
        )
            .then((response) => response.json())
            .then((data) => setData(data)).catch(error => {
            console.log("Api call error")
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                {data.profile_path != null ?
                    <Image
                        style={styles.image}
                        source={{uri: `https://www.themoviedb.org/t/p/w780${data.profile_path}`,}}
                    /> : null}

                <View style={styles.text}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -40}}>

                        <View>
                            {data.profile_path !== null ?
                                <Text style={styles.title}>{data.name}</Text>
                                :
                                <Text style={styles.titleNoImg}>{data.name}</Text>}
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
                            <Ionicons name='star' color="gold" size={24}/>

                            <Text style={styles.reviews}>
                                {data.popularity}
                            </Text>

                        </View>
                    </View>

                    <Text> </Text>

                    <View>
                        {data.biography !== ''?
                            <Text style={styles.overview}>{data.biography}</Text>
                            :
                            null
                        }
                    </View>

                    <Text> </Text>

                    <View>
                        {data.birthday !== null && data.place_of_birth !== null ?
                            <Text style={styles.minor}>Born: {data.birthday}, {data.place_of_birth} </Text>
                            :
                            null
                        }
                    </View>

                    <Text> </Text>

                    <View>
                        {data.homepage !== null ?
                            <Text style={{color: '#1096f5'}}
                                  onPress={() => Linking.openURL(data.homepage)}>
                                See Website
                            </Text>
                            :
                            null
                        }
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
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
        width: 200,
        height: 300,
        marginTop: 50,
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gold',
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
    },

});
