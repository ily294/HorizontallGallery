import 'script!angular';
import 'script!jquery';
import 'bootstrap-grid';
import './templates/main.scss';
import 'font-awesome/scss/font-awesome.scss';
import {Gallery} from 'gallery';
import {MainCtrl} from './controllers/MainCtrl/index'
export const TestJob = 'TestJob';
export default angular.module('TestJob', [Gallery])
    .controller('MainCtrl', MainCtrl);