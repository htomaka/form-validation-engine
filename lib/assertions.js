/**
 * Created by htomaka on 11/11/17.
 */
import Result from 'folktale/result';
import {isNil} from 'lodash';

export const isNotEmpty = value => {
  return !isNil(value) ? Result.Ok(value) : Result.Error('IS_EMPTY');
};

export const isLongEnough = (value, target) => {
  return value.length >= target ? Result.Ok(value) : Result.Error('NOT_LONG_ENOUGH');
};

export const isEqual = (val1, val2) => {};
export const match = (val, regex) => {};
export const isLessThan = (val1, val2) => {};
export const isMoreThan = (val1, val2) => {};
export const notExists = (asyncCall) => {};
export const hasChanged = (oldVal, newVal) => !isEqual(oldVal, newVal);
