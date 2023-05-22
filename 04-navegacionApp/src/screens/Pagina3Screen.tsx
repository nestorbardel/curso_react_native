import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const Pagina3Screen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina3Screen</Text>
            <Button
                title="Regresar"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Ir al Pagina 1"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};