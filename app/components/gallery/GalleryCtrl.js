const inject = ['$scope', '$element'];
export class GalleryCtrl {

    constructor($scope, $element) {

        this.$element = $element;
        this.scrollableElements = $(this.$element).find('.blocks');
        this.$scope = $scope;
    }

    left() {
        this.smoothScrollTo(this.scrollableElements.scrollLeft() - 200);
    }

    right() {
        this.smoothScrollTo(this.scrollableElements.scrollLeft() + 200);
    }

    smoothScrollTo(value) {
        this.scrollableElements.stop().animate({scrollLeft: value}, '500', 'swing');
    }

}

GalleryCtrl.$inject = inject;