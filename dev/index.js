import { API_URL, getApiUrl, getApiSchema } from '@iarroyo/multi-part-library/api';
import { getUserPath } from '@iarroyo/multi-part-library/path';

console.log('API_URL', API_URL);
console.log('getApiUrl', getApiUrl());
console.log('getApiSchema', getApiSchema());

console.log('getUserPath', getUserPath({id: 'iarroyo'}));
