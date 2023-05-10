import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)


    return (
        <View style={styles.container}>
            <Text 
                style={styles.title}>
                Contador: {contador}
            </Text>
            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
            >
                <View style={styles.fab}>
                    <Text>Click me!!!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize:40,
        top:-15
    },
    fab:{
        backgroundColor: '#5856d6',
        borderRadius: 100,
        width:60,
        height:60,
    }
})
