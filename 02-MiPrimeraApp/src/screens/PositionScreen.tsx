import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde}></View>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        // width: 400,
        // height: 400,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'#28C4D9',
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top:10,
        right: 10,
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom: 10,
        right:10,
    },
    cajaVerde:{
        // width:100,
        // height:100,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        // position:'absolute',
        // bottom: 10,
        // left:10,
        ...StyleSheet.absoluteFillObject,
    }
});