import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text, ColorValue } from 'react-native'

type Props = {
    tittle: string;
    color: ColorValue;
    backgroundColor: ColorValue;
}

export function Button({ tittle, color, backgroundColor }: Props) {
    return (
        <TouchableOpacity>
            <Text style={[styles.tittle, { color }]} >
                {tittle}
            </Text>

        </TouchableOpacity>
    );
}