import AsyncStorage from '@react-native-async-storage/async-storage';

// Chaves que vamos usar para salvar os dados
const STORAGE_KEYS = {
  USER_TOKEN: '@user_token',
  USER_DATA: '@user_data',
};

// --- Função para SALVAR dados ---
export const saveData = async (key: string, value: any) => {
  try {
    // AsyncStorage só guarda texto, então temos que transformar em JSON
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Erro ao salvar dados:', e);
  }
};

// --- Função para PEGAR dados ---
export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Erro ao recuperar dados:', e);
  }
};

// --- Função para REMOVER dados (ex: fazer logout) ---
export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Erro ao remover dados:', e);
  }
};

// --- Funções específicas para facilitar seu login ---

// Salvar o token do usuário quando ele logar
export const saveUserToken = async (token: string) => {
  await saveData(STORAGE_KEYS.USER_TOKEN, token);
};

// Pegar o token para saber se o usuário já está logado
export const getUserToken = async () => {
  return await getData(STORAGE_KEYS.USER_TOKEN);
};

// Apagar tudo quando o usuário fizer logout
export const clearUserData = async () => {
  await removeData(STORAGE_KEYS.USER_TOKEN);
  await removeData(STORAGE_KEYS.USER_DATA);
};