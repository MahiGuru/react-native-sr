import axios from 'axios';
import { getCredentialsWithUrls} from '../core/common/common.service';
import * as Crypto from 'expo-crypto';
import { Alert } from 'react-native';
import {AssetsKeys } from '../core/constants/assets-keys';
export const asset_action_creator = (qrCode) => {
    return async (dispatch, getState) => {
      console.log("inside ACTIOND", qrCode);
        const hashedQrCodeKey = await generateQrcodeKey(qrCode);
        console.log("INSIDE ACTION CAN >>>> ", hashedQrCodeKey);
        assetInfo = await readQrCode(hashedQrCodeKey);
        console.log('ASSET DETAILS >>>>> ', assetInfo.data);
        if(assetInfo) {
          dispatch(fetch_asset(assetInfo.data));
          const assetDetails = await getAssetDetails(assetInfo.data.assetId, assetInfo.data.assetType);          
          dispatch(fetch_asset_details(assetDetails.data));
        }else{
          alertInvalidScan();
        }
    }
} 

const getAssetDetails = async (assetId, assetType) => {
  console.log("ASSET ID AND TYPE >>>>>>> ", assetId, assetType);
  const assetTypeAndParam = getAssetTypeAndParam(assetType);
  console.log(assetTypeAndParam, " <<<<<< assetTypeAndParam >>>> ");
  const endPoint = await getCredentialsWithUrls(assetTypeAndParam[0], true, assetTypeAndParam[1], assetId);
  return axios.get(endPoint);
}

const getAssetTypeAndParam = (assetType) => {
  let urlType;
  let paramName;
  switch (assetType) {
    case AssetsKeys.Equipment:
      urlType = AssetsKeys.EquipmentUrlType;
      paramName = AssetsKeys.EquipmentParamName;
      break;

    case AssetsKeys.Building:
      urlType = AssetsKeys.BuildingUrlType;
      paramName = AssetsKeys.BuildingParamName;
      break;

    case AssetsKeys.Zone:
      urlType = AssetsKeys.ZoneUrlType;
      paramName = AssetsKeys.ZoneParamName;
      break;

    case AssetsKeys.Local:
      urlType = AssetsKeys.LocalUrlType;
      paramName = AssetsKeys.LocalParamName;
      break;
  }
  return [urlType, paramName];
}
const alertInvalidScan = () => {
  Alert.alert(
    'Smart Request',
    'qrCodeNonReconnu',
    [
      {text: 'Scan', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
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
const readQrCode = async (hashedQrCodeKey) => { 
  const url = await getCredentialsWithUrls('getAssetByQrcode', true, 'qrcodeKey', hashedQrCodeKey);
  console.log("MYURL", url);
  return axios.get(url).then(res => {
    console.log(res);
    return res;
  }, err => {
    console.log(err);
  });
}

export const fetch_asset = (data) => {
    return {
      type: "FETCH_ASSET",
      data
    };
  };
  export const fetch_asset_details = (data) => {
    return {
      type: "FETCH_ASSET_DETAILS",
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