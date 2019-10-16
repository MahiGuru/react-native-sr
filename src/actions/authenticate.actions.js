import axios from 'axios';
import Storage from '../store/storage';
import { getCredentialsWithUrls} from '../core/common/common.service';

export const autheticate_action_creator = () => {
    return async (dispatch, getState) => {
        await Storage.setItem('baseUrl', 'http://pc13985:1156/');
        const baseUrl = await Storage.getItem('baseUrl');
        const configuration = await getConfiguration(baseUrl);
        console.log("configuration", configuration);
        if(configuration) {
            /**
             *  authorization using credentials 
             *  Authorizaion token url
             *  */

            const authorize = await getAuthorization('sam', 'admsam', 'smartrequest', '865a3916eecaffd1aa9ba95918255c96', configuration.data.authorizationTokenUri);
            if(authorize) {
                console.log("INSIDE TOKEN SET");
                Storage.setItem('token', authorize.data.access_token);
            }
            // handling Modules here
            const authorizeModule = await axios.get(baseUrl+configuration.data.authorizationModuleUri);            
            if(authorizeModule){
                const smartRequestModule = authorizeModule.data.modules.filter( module => module.name === 'SMARTREQUEST' );
                console.log('smartRequestModule', smartRequestModule);
                if(smartRequestModule.length >= 1){
                    await Storage.setItem('start_url', smartRequestModule[0].startUrl);
                    const getUrls = await axios.get(baseUrl+smartRequestModule[0].startUrl);
                    await Storage.setItem('username', 'sam');
                    if(getUrls) await Storage.setItem('URLS', getUrls.data.urls);

                    const vocabulary = await loadVocabulary();
                    if(vocabulary) await Storage.setItem('smartrequest_vocabulary', vocabulary.data);
                    console.log("vocabulary>>>> ", vocabulary);
                    dispatch(fetch_vocabulary(vocabulary.data));
                }
            }
        }

    }
}

const getConfiguration = (baseUrl) => {    
    const headers = { 'Content-Type': 'application/json' };
    const configurationEndPoint = baseUrl+'/api/nova/ConfigurationUri';
    return axios.get(configurationEndPoint, headers);
}

const getAuthorization = (userName, password, clientId, clientSecret, authorizeEndPoint) => {    
    const headers = { 'Content-Type': 'application/json' };
    const body = `grant_type=password&username=${userName}&password=${password}&client_id=${clientId}&\
    client_secret=${clientSecret}`;
    const configurationEndPoint = authorizeEndPoint;
    return axios.post(configurationEndPoint, body, headers);
}

const loadVocabulary = async () => {
    const url = await getCredentialsWithUrls('getVocabulary', true, 'moduleId', 41);
    return await axios.get(url);
}


export const fetch_vocabulary = (data) => {
    return {
      type: "FETCH_VOCABULARY",
      data
    };
  };
  
  export const fetch_URLS = post => {
    return {
      type: "FETCHED_URLS",
      data: post
    };
  };
  
  export const receive_error = (data) => {
    return {
      type: "RECEIVE_ERROR",
      data
    };
  };