import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title="Ir a pagina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize:20,
                    marginLeft:5,
                }}
            >
                Navegar con argumentos
            </Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6',
                    }}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 1,
                        nombre: 'Pedro',
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427',
                    }}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 2,
                        nombre: 'Maria',
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
            {/* <Button
                title="Ir persona"
                onPress={() => navigation.navigate('PersonaScreen')}
            /> */}
        </View>
    );
};