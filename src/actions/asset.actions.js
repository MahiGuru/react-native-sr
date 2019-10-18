import axios from 'axios';
import Storage from '../store/storage';
import { getCredentialsWithUrls} from '../core/common/common.service';
import CryptoJS from "react-native-crypto-js"; 
import * as Crypto from 'expo-crypto';

export const asset_action_creator = (qrCode) => {
    return async (dispatch, getState) => {
      console.log("inside ACTIOND", qrCode);
        const hashedQrCodeKey = await generateQrcodeKey(qrCode);
        console.log("INSIDE ACTION CAN >>>> ", hashedQrCodeKey);
        assetInfo = await getAssetDetails(hashedQrCodeKey);
        console.log('ASSET DETAILS >>>>> ', assetInfo);
        dispatch(fetch_qrcode(assetInfo));
    }
} 

const generateQrcodeKey = async (qrCode) => {
  console.log("BEFORE >>> ", qrCode);
  if (qrCode) {
    const sha1Str = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA1,
      qrCode
    );
    const md5Str = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.MD5,
      qrCode
    ); 
    console.log('HASHER >>>> ', sha1Str, md5Str, md5Str.toString() + sha1Str.toString());
    return md5Str.toString() + sha1Str.toString();
  }
  return '';
}
const getAssetDetails = async (hashedQrCodeKey) => { 
  const url = await getCredentialsWithUrls('getAssetByQrcode', true, 'qrcodeKey', hashedQrCodeKey);
  console.log("MYURL", url);
  return axios.get(url).then(res => {
    console.log(res);
    return res;
  }, err => {
    console.log(err);
  });
}

export const fetch_qrcode = (data) => {
    return {
      type: "FETCH_QRCODE",
      data
    };
  };
  
  export const receive_post = post => {
    return {
      type: "FETCHED_USER",
      data: post
    };
  };
  
  export const receive_error = (data) => {
    return {
      type: "RECEIVE_ERROR",
      data
    };
  };