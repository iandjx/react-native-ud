import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header/Header'
import AlbumList from './src/components/albumList/AlbumList'
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'}/>
        <AlbumList/>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });
