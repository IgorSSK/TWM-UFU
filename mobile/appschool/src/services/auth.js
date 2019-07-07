import AsyncStorage from '@react-native-community/async-storage'

export const TOKEN_KEY = '@schoolapp_token'

export const isAuthenticated = async () => await AsyncStorage.getItem(TOKEN_KEY) !== null

export const getToken = async () => await AsyncStorage.getItem(TOKEN_KEY)

export const login = token => AsyncStorage.setItem(TOKEN_KEY, token)

export const logout = () => AsyncStorage.removeItem(TOKEN_KEY)

