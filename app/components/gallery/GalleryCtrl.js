const inject = ['$scope', '$element'];
export class GalleryCtrl {

    constructor($scope, $element) {

        this.$element = $element;
        this.scrollableElements = $(this.$element).find('.blocks');
        this.$scope = $scope;
    }

    left(count) {
        let offset = count ? count : 200;
        this.smoothScrollTo(this.scrollableElements.scrollLeft() - offset);
    }

    right(count) {
        let offset = count ? count : 200;
        this.smoothScrollTo(this.scrollableElements.scrollLeft() + offset);
    }

    smoothScrollTo(value) {
        this.scrollableElements.stop().animate({scrollLeft: value}, '500', 'swing');
    }

    wheel($delta) {
        this.scrollableElements.scrollLeft(this.scrollableElements.scrollLeft() + $delta.wheelDelta);
    }

}

GalleryCtrl.$inject = inject;