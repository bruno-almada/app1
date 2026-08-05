import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { style } from "./styles";

type Props = {
    label: string;
    secureTextEntry?: boolean;
    icon?: React.ReactNode;
    value: string;
    onChangeText: (text: string) => void;
};
export function InputFloat({ 
    label, 
    secureTextEntry= false, 
    icon,
    value,
    onChangeText
}: Props)  {


    const [focus, setFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    return (
        <View style={style.boxInput}>

            {(focus || value) && (
                <Text style={style.label}>
                    {label}
                </Text>
            )}

            <TextInput
                style={style.input}
                placeholder={!focus ? label : ""}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                secureTextEntry={Boolean(secureTextEntry && !showPassword)}
            />

            {secureTextEntry ? (
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                >
                    {icon}
                </TouchableOpacity>
            ) : (
                icon
            )}

        </View>
    );
}
