import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Animated } from 'react-native';

interface InputFloatProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

export default function InputFloat({ 
  label, 
  value, 
  onChangeText, 
  secureTextEntry = false, 
  keyboardType = 'default' 
}: InputFloatProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  // Animação simples para subir o texto
  const [animation] = useState(new Animated.Value(0));

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0], // Sobe 18px para cima quando focado
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Diminui a fonte quando sobe
    }),
    color: isFocused || value ? '#6200ee' : '#aaa', // Muda de cor quando focado ou tem texto
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>
        {label}
      </Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder="" // O placeholder é o próprio label animado
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    position: 'relative',
  },
  input: {
    height: 55,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingHorizontal: 0,
    color: '#000',
    marginTop: 5,
  },
  label: {
    position: 'absolute',
    left: 0,
    color: '#aaa',
    fontWeight: '500',
  },
});