import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{marginTop: insets.top}}>
            <Text style={styles.title}>SettingsScreen</Text>
        </View>
    );
};