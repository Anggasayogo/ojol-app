import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackIcon } from '../../../assets';

const ButtonIcon = ({ ...rest }) => {
    return (
        <TouchableOpacity {...rest}>
            {rest.name === 'back' && <Image source={BackIcon} style={{ width: 25, height: 25 }} />}
        </TouchableOpacity>
    )
}

export default ButtonIcon;
