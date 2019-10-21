import axios from 'axios';
import { getCredentialsWithUrls} from '../core/common/common.service';
import { AssetsKeys } from '../core/constants/assets-keys';

export const equipment_action_creator = (assetType, assetId, domainId) => {
    return async (dispatch, getState) => {
        console.log("INSIDE ACTION EQUIPMENTS", assetType);
        assetTypeAndParam = await getEquipmentAssetTypeAndParam(assetType);
        console.log("INSIDE ACTION PARAM >>>>>", assetTypeAndParam);
        if(assetTypeAndParam) { 
          const equipments = await getEquipmentsList(assetTypeAndParam, assetId, domainId);
          dispatch(fetch_equipments(equipments.data));
          console.log('EQUIPMENTS >>>>> ', equipments);
        }
         
    }
} 

const getEquipmentsList = async (assetTypeAndParam, assetId, domainId) => {
  let url = await getCredentialsWithUrls(assetTypeAndParam[0], true, assetTypeAndParam[1], assetId);
  if (domainId) {
    url += '?domainId=' + domainId;
  }
  console.log('url ---------------', url);
  return axios.get(url);

}

const getEquipmentAssetTypeAndParam = (assetType) => {
  let urlType;
  let paramName;
  switch (assetType) {
    case AssetsKeys.Zone:
      urlType = AssetsKeys.ZoneUrlTypeEquipment;
      paramName = AssetsKeys.ZoneParamName;
      break;

    case AssetsKeys.Local:
      urlType = AssetsKeys.LocalUrlTypeEquipment;
      paramName = AssetsKeys.LocalParamName;
      break;
  }
  return [urlType, paramName];
}


export const fetch_equipments = (data) => {
    return {
      type: "FETCH_EQUIPMENTS",
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