import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {

    state = {albums: []};
    
    componentDidMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
        return this.state.albums.map(
            album => <Text>{album.title}</Text>
        );
    }

    render(){
        console.log(this.state);
        return(
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}


export default AlbumList; 