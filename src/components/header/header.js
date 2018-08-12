import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.headerStyle}>Albums!</Text>
        </View>

    )
   
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 20
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        width: "100%",
        height: 60,
        padding: 15,
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
  });

export default Header;