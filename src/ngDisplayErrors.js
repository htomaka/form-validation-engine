/**
 * Created by htomaka on 12/11/17.
 */
import {Maybe} from 'monet';
import {reduce} from 'lodash';

const errorsToMaybe = ( errorsStr ) => {
    return errorsStr ? Maybe.Just (errorsStr) : Maybe.Nothing ();
};

const findInvalidFieldInContainer = (container, field) => {
    const invalidField = container.querySelector (`[name=${field}]`);
    return !!invalidField ? Maybe.Just(invalidField) : Maybe.Nothing();
};

const foldErrors = ( el, errorsMap ) => {
    return reduce (errorsMap, ( acc, errorMsg, field ) => {
        findInvalidFieldInContainer(el, field)
            .chain(() => {
                // add errors message to list
                acc = [...acc, Maybe.Just (errorMsg)];
            });
        return acc;
    }, []);
};

const removeErrors = (targetEl) => {
    const errorsEl = targetEl.querySelector('.error');
    if(errorsEl){
        targetEl.removeChild(errorsEl);
    }
};

const renderError = ( targetEl, msg ) => {
    const msgEl = document.createElement ('p');
    const msgContent = document.createTextNode (`${msg}`);
    msgEl.classList.add('error');
    msgEl.style.color = 'Red';
    msgEl.appendChild (msgContent);
    targetEl.appendChild (msgEl);
};

function ngDisplayErrors () {
    return function ( scope, el, attrs ) {
        attrs.$observe ('ngDisplayErrors', errorsString => {
            errorsToMaybe (scope.$eval (errorsString))
                .map (errorsMap => foldErrors (el[0], errorsMap))
                .chain (errorsMsg => {
                    // reset errors
                    removeErrors(el[0]);
                    // display errors
                    errorsMsg.forEach (errorMsg => {
                        errorMsg.chain (msg => renderError (el[0], msg));
                    });
                });
        });
    };
}
export default ngDisplayErrors;
