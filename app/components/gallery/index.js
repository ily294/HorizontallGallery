import './gallery.scss';
import {GalleryCtrl} from './GalleryCtrl';
import GalleryTemplateUrl from './gallery-template.html';
import ImgTemplateUrl from './image-template.html';
import 'angular-mousewheel';

export const Gallery = 'Gallery';
export default angular.module(Gallery, ['monospaced.mousewheel'])


    .directive('gallery', [()=> {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: GalleryTemplateUrl,
            controller: GalleryCtrl,
            controllerAs: 'GalleryCtrl',


            compile: (element, attr)=> {

                console.log(element);
            }

        }
    }])

    .directive('gImg', [()=> {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: true,
            templateUrl: ImgTemplateUrl
        }
    }])