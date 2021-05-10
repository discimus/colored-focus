import React, { useState } from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

const TextInput = ({ text, onChangeCallback }) => {
    // const [text, setText] = useState('');

    return (
        <PaperTextInput
            label="Email"
            value={ text }
            onChangeText={text => onChangeCallback(text)}
        />
    );
};

export default TextInput;