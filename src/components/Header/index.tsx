import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';


export function Header() {
    return (
        <View style={styles.container}>
            <LogoSvg />

            <UserPhoto imageUri='https://github.com/johnnycancilier.png' />

            <TouchableOpacity>
                <Text style={styles.lougoutText}>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    );
}