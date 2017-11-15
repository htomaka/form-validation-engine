/**
 * Created by htomaka on 11/11/17.
 */
import {reduce} from 'lodash';
import {isError} from './utils';

export const collectErrors = validationRules => {
  return reduce(validationRules, (acc, validationFn, key) => {
    const validationResult = validationFn();
    if (isError(validationResult)) {
      validationResult.cata(error => {
        acc[key] = error;
      });
    }
    return acc;
  }, {});
};
