import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={
                    [
                        styles.fabLocation,
                        (position === 'br') ? styles.right : styles.left,
                    ]
                }
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={
                    [
                        styles.fabLocation,
                        (position === 'br') ? styles.right : styles.left,
                    ]
                }
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:25,
    },
    right: {
        right:25,
    },
    left: {
        left: 25,
    },
    fab:{
        backgroundColor: '#5856d6',
        borderRadius: 100,
        width:60,
        height:60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    fabText:{
        color: 'white',
        fontSize:25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
