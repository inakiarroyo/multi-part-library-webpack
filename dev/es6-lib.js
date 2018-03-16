'use strict';

var _api = require('@iarroyo/multi-part-library/api');

var _path = require('@iarroyo/multi-part-library/path');

console.log('API_URL', _api.API_URL);
console.log('getApiUrl', (0, _api.getApiUrl)());
console.log('getApiSchema', (0, _api.getApiSchema)());

console.log('getUserPath', (0, _path.getUserPath)({ id: 'iarroyo' }));
