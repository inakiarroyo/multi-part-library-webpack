import * as lib from '@iarroyo/multi-part-library';
import * as api from '@iarroyo/multi-part-library/api';
import * as path from '@iarroyo/multi-part-library/path';

import { API_URL, getApiSchema, getApiUrl } from '@iarroyo/multi-part-library/api';
import { getUserPath, repeatedFunctionName } from '@iarroyo/multi-part-library/path';

import { pathLib } from '@iarroyo/multi-part-library';

const repeatedName = pathLib.repeatedFunctionName();

console.log('\n|************ LIBS CONTENT ******|\n');

console.log(lib);
console.log(api);
console.log(path);

console.log('\n|************ VALUES ************|');

console.log('\n__API LOGS__');
console.log('API_URL', API_URL);
console.log('getApiUrl', getApiUrl());
console.log('getApiSchema', getApiSchema());

console.log('\n__PATH LOGS__');
console.log('getUserPath', getUserPath({id: 'dummy'}));
console.log('import_repeatedFunctionName', repeatedFunctionName());
console.log('const_repeatedFunctionName', repeatedName);

console.log('\n|*******************************|\n');
