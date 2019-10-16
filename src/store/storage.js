//./storage.js
import {AsyncStorage} from 'react-native';

export default Storage = {

    getItem: async function (key) {
        let item = await AsyncStorage.getItem(key);
        //You'd want to error check for failed JSON parsing...
        return JSON.parse(item);
    },
    setItem: async function (key, value) {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: async function (key) {
        return await AsyncStorage.removeItem(key);
    },
    clearAll: async () => {
        return await AsyncStorage.clear();
    },
    getAllKeys: async () => {
        return await AsyncStorage.getAllKeys();
    }
};