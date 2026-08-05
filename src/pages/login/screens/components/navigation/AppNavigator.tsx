import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

// CORRIJA OS IMPORTS - use o caminho correto para seus arquivos
import LoginScreen from '../../LoginScreen';
import CadastroScreen from '../../CadastroScreen';
import HomeScreen from '../../HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const loggedIn = await AsyncStorage.getItem('@isLoggedIn');
      setIsLoggedIn(loggedIn === 'true');
    } catch (error) {
      console.log('Erro ao verificar login:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen 
              name="Cadastro" 
              component={CadastroScreen} 
              options={{ 
                headerShown: true,
                headerTitle: 'Cadastro',
                headerBackTitle: 'Voltar',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}