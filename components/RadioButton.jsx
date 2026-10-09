import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const RadioButton = ({label, selected, onSelect}) =>{
    <TouchableOpacity
    style={[styles.radioOption, selected && styles.radioSelected]}
    onPress={onSelect}
    >
        <Text style={selected ? {color: "#fff"} : {color: "#000"}}>{label}</Text>
    </TouchableOpacity>
}

export default RadioButton;