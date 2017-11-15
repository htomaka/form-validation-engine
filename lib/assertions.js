/**
 * Created by htomaka on 11/11/17.
 */
import {Either} from 'monet';

export const isNotEmpty = value => {
  return value && value.trim() !== '' ? Either.Right(value) : Either.Left('IS_EMPTY');
};

export const isLongEnough = (value, target) => {
  return value && value.length >= target ? Either.Right(value) : Either.Left('NOT_LONG_ENOUGH');
};

export const isEqual = (val1, val2) => {};
export const match = (val, regex) => {};
export const isLessThan = (val1, val2) => {};
export const isMoreThan = (val1, val2) => {};
export const notExists = (asyncCall) => {};
export const hasChanged = (oldVal, newVal) => !isEqual(oldVal, newVal);
