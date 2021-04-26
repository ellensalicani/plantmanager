import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import userImg from '../assets/ellen.png'
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){
    const [username, setUsername] = useState<string>()

    useEffect(() => {
        async function loadStorageUsername() {
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUsername(user || '')
        }
        loadStorageUsername()
    }, [])

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{username}</Text>
            </View>
            <Image style={styles.image} source={userImg} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32, 
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    }
})