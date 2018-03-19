import * as path from 'path';
import { get, isEmpty } from 'lodash';

import { getApiUrl } from "../api";

export function getUserPath(user = {}) {
  if (isEmpty(user)) {
    throw new TypeError('User data can not be empty');
  }

  const safeUserID = get(user, 'id', '');

  return path.join(getApiUrl(), safeUserID);
}

export function repeatedFunctionName() {
  return 'repeated function path';
}
