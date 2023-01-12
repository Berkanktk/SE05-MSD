import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import {API_KEY} from '@env'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [],
            error: null,
            loading: false,
        };
    }

    // Making the search
    search = async () => {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${this.state.search}&page=1`
        this.setState({loading: true});

        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results,
                    error: res.error || null,
                    loading: false,
                });
            })
            .catch(error => {
                console.log("Api call error");
                this.setState({error, loading: false});
            });
    };

    // Render items based on the media type
    renderListItem = ({item}) => {
        if (item.media_type === 'movie') {
            return (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate("Movie Details", {
                        movieId: item.id,
                    })}
                >
                    <ListItem bottomDivider
                              containerStyle={{backgroundColor: "#EEE"}}
                    >

                        {item.poster_path != null ?
                            <Image
                                style={styles.image}
                                source={{uri: `https://www.themoviedb.org/t/p/w780${item.poster_path}`,}}
                            /> : null}

                        <ListItem.Content>

                            <ListItem.Title>{item.title} (Movie)</ListItem.Title>

                            <ListItem.Subtitle
                                style={{color: '#000'}}>
                                Released: {item.release_date}
                            </ListItem.Subtitle>

                            <ListItem.Subtitle
                                style={{color: '#000'}}>
                                Rating: {item.vote_average >= 7 ?
                                <ListItem.Subtitle style={{color: 'green'}}>{item.vote_average}</ListItem.Subtitle> :
                                <ListItem.Subtitle style={{color: 'red'}}>{item.vote_average}</ListItem.Subtitle>}
                            </ListItem.Subtitle>

                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
            );
        } else if (item.media_type === 'person') {
            return (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate("Person Details", {
                        personID: item.id,
                    })}
                >

                    <ListItem bottomDivider
                              containerStyle={{backgroundColor: "#EEE"}}>

                        {item.profile_path != null ?
                            <Image
                                style={styles.image}
                                source={{uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.profile_path}`,}}
                            /> : null}

                        <ListItem.Content>

                            <ListItem.Title>{item.name} (Person)</ListItem.Title>

                            <ListItem.Subtitle
                                style={{color: '#000'}}>
                                Known for: {item.known_for_department}
                            </ListItem.Subtitle>

                            <ListItem.Subtitle
                                style={{color: '#000'}}>
                                Popularity: {item.popularity}
                            </ListItem.Subtitle>

                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
            )
        } else if (item.media_type === 'tv') {
            return (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => this.props.navigation.navigate("Show Details", {
                        movieId: item.id,
                    })}
                >
                    <ListItem bottomDivider
                              containerStyle={{backgroundColor: "#EEE"}}>

                        {item.poster_path != null ?
                            <Image
                                style={styles.image}
                                source={{uri: `https://www.themoviedb.org/t/p/w780${item.poster_path}`,}}
                            /> : null}

                        <ListItem.Content>

                            <ListItem.Title>{item.name} (TV Show)</ListItem.Title>

                            <ListItem.Subtitle
                                style={{color: '#000'}}>
                                Airtime: {item.first_air_date}
                            </ListItem.Subtitle>

                            <ListItem.Subtitle
                                style={{color: '#000'}}>
                                Rating: {item.vote_average >= 7 ?
                                <ListItem.Subtitle style={{color: 'green'}}>{item.vote_average}</ListItem.Subtitle> :
                                <ListItem.Subtitle style={{color: 'red'}}>{item.vote_average}</ListItem.Subtitle>}
                            </ListItem.Subtitle>

                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
            )
        }
    }

    // Creating the view
    render() {
        return (
            <View style={styles.searchContainer}>
                <StatusBar barStyle="light-content" backgroundColor="#fff"/>
                <View style={styles.searchArea}>
                    <SearchBar
                        containerStyle={styles.searchBar}
                        placeholder="Movie, show, persons..."
                        platform={Platform.OS}
                        round
                        autoFocus={true}
                        showLoading={false}
                        showCancel={false}
                        // cancelButtonTitle={''}
                        autoCorrect={false}
                        value={this.state.search}
                        onChangeText={search => {
                            this.setState({search});

                            if (this.state.search.length > 2 && this.state.search[0] !== ' ') {
                                this.search();
                            }
                        }}
                    />
                    {/*<Button*/}
                    {/*    buttonStyle={{backgroundColor: "orange", padding: 9}}*/}
                    {/*    title="Search"*/}
                    {/*    onPress={() => {*/}
                    {/*        Keyboard.dismiss();*/}
                    {/*        this.search()*/}
                    {/*    }}*/}
                    {/*/>*/}
                </View>

                {this.state.loading ? (
                    // Loading icon, but it is not in use
                    <ActivityIndicator
                        style={{
                            position: 'absolute',
                            flexDirection: 'row',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            marginTop: 0,
                        }}
                        size="large"
                        color="#0275d8"
                    />
                ) : (
                    <FlatList
                        style={{flex: 1}}
                        data={this.state.data}
                        renderItem={this.renderListItem}
                        keyExtractor={(item) => item.id}
                    />
                )}
            </View>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        border: 0,
        borderColor: '#151515',
    },
    searchArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#151515',
        borderWidth: 0, //no effect
        borderTopWidth: 0, //works
        borderBottomWidth: 0, //works
        marginTop: 50
    },
    searchContainer: {
        flex: 1,
        backgroundColor: '#151515',
    },
    searchBar: {
        width: '80%',
        height: undefined,
        backgroundColor: '#151515',
        border: 0
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 4,
        borderRadius: 20,
        overflow: 'hidden',

    },
    image: {
        borderRadius: 20,
        width: '10%',
        height: undefined,
        aspectRatio: 0.7,
        alignSelf: 'center',
    },
});
