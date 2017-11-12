/**
 * Created by htomaka on 10/11/17.
 */
import angular from 'angular';
import RootComponent from './root/root';
import ngDisplayErrors from './ngDisplayErrors';


angular.module('formValidation', [])
    .component('root', RootComponent)
    .directive('ngDisplayErrors', ngDisplayErrors);

