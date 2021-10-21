import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps, Text, ColorValue, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
    tittle: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading?: boolean;
}

export function Button({ tittle, color, backgroundColor, icon, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            activeOpacity={0.7}
            disabled={isLoading}
            {...rest}
        >
            {
                isLoading ? <ActivityIndicator color={color} /> :

                    <>
                        <AntDesign name={icon} size={14} style={styles.icon} />
                        <Text style={[styles.tittle, { color }]} >
                            {tittle}
                        </Text>
                    </>}
        </TouchableOpacity>
    );
}