/**
 * Created by htomaka on 12/11/17.
 */
import Maybe from 'folktale/maybe';
import {reduce} from 'lodash';

const errorsToMaybe = (errorsStr) => {
  return errorsStr ? Maybe.Just(errorsStr) : Maybe.Nothing();
};

const foldErrors = (el, errorsMap) => {
  return reduce(errorsMap, (acc, errorMsg, field) => {
    // Find if invalid field exist in DOM
    const invalidField = el[0].querySelector(`[name=${field}]`);
    if (invalidField) {
      // add errors message to list
      acc =  [...acc, Maybe.Just(errorMsg)];
    }
    return acc;
  }, []);
};

const renderError = (targetEl, msg) => {
  const msgEl = document.createElement('p');
  const msgContent = document.createTextNode(`${msg}`);
  msgEl.style.color = 'Red';
  msgEl.appendChild(msgContent);
  targetEl.appendChild(msgEl);
};

function ngDisplayErrors() {
  return function(scope, el, attrs) {
    attrs.$observe('ngDisplayErrors', errorsString => {
      errorsToMaybe(scope.$eval(errorsString))
        .map(errorsMap => foldErrors(el, errorsMap))
        .chain(errorsMsg => {
          errorsMsg.forEach(errorMsg => {
            errorMsg.chain(msg => renderError(el[0], msg));
          });
        });
    });
  };
}
export default ngDisplayErrors;
