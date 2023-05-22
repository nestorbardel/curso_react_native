import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={(props) => <MenuInterno {...props}/>}
        >
        <Drawer.Screen name="StackNavigator" component={StackNavigator} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
                    }}
                    style={styles.avatar}
                >

                </Image>
            </View>

            {/* Opciones del menu */}
            <View style={styles.menuContainer}>
                    <TouchableOpacity
                        style={styles.menuBoton}
                        onPress={() => navigation.navigate('StackNavigator')}
                     >
                        <Text style={styles.menuTexto}>Navegacion Stack</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuBoton}
                        onPress={() => navigation.navigate('SettingsScreen')}
                     >
                        <Text style={styles.menuTexto}>Ajustes</Text>
                    </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}