/**
 * Created by htomaka on 11/11/17.
 */
import {reduce} from 'lodash';

export const collectErrors = validationRules => {
  return reduce(validationRules, (acc, fn, key) => {
    acc[key] = fn()
        .mapError(error => error)
        .merge();
    return acc;
  }, {});
};
