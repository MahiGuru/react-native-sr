import axios from 'axios';

export const getCredentialsWithUrls = async (urlType, isIdReplace =false, currentParamName = '', replacedParamName = '') => {
    const urls = await Storage.getItem('URLS');
    const baseUrl = await Storage.getItem('baseUrl');
    let url = baseUrl + urls[urlType];
    console.log(url)
    if (isIdReplace) { 
        console.log("INSIDE ID TRUE");
        url = url.replace('{' + currentParamName + '}', replacedParamName); }
    console.log("URLLLLLL>>> ", url, currentParamName, replacedParamName);
    return url;
}

export const getUserDetail = async () => {
    const loggedUser = await Storage.getItem('username');
    const url = await getCredentialsWithUrls('getUserByIdentifier', true, 'id', loggedUser);
    return axios.get(url);
}