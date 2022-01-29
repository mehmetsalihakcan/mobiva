import * as actionTypes from './actionTypes';
import axios from 'axios';
import {baseUrl} from '../../helper/helper';

export const addProduct = (data) => {
  return { type: actionTypes.ADD_PRODUCT, payload: data };
};

export const getReddits= async()=> {
 
  try {
    const response = await axios.get(baseUrl+'/r/pics/hot.json');
    const res=response.data.data;

    const newArray = [];
    for (let index = 0; index < res.children.length; index++) {
      const element = res.children[index].data;
           newArray.push(element);
    }

    return newArray;
  } catch (error) {
    console.error(error);
  }
}




