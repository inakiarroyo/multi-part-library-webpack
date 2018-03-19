import { API_URL } from './api.constants';

export const getApiSchema = () => {
    return {
        version: 'v1',
        author: 'iarroyo'
    };
}

export function getApiUrl() {
    return API_URL;
}

export function repeatedFunctionName() {
    return 'repeated function api';
  }