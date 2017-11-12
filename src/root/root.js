/**
 * Created by htomaka on 11/11/17.
 */
import {each} from 'lodash';
import {validationRules} from '../validationRules';
import {collectErrors} from '../../lib/collectErrors';
import template from './root.html';

class controller {
    constructor() {
      this.form = {};
      this.formErrors = null;
      this.formData = null;
    }

    validateForm(formData) {
      this.formErrors = collectErrors(validationRules(formData));
      each(this.formErrors, (error, field) => {
        this.form[field].$setValidity(error, false);
      });
    }
}

const RootComponent = {
  bindings: {},
  controller,
  template,
};

export default RootComponent;
