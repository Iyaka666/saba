import * as secureStorage from 'expo-secure-store'

export const save = async (username, password) => {
    const credentials = JSON.stringify({username, password})
    await secureStorage.setItemAsync()
}