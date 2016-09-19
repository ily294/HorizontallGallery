import {Block} from './Block';

const inject = ['$scope'];
export class MainCtrl {
    constructor($scope) {

        this.blocks = null;
        this.blockCounts = 0;
        let self = this;
        $scope.$watch('Main.blockCounts', (value)=> {
            if (value < 0) {
                self.blockCounts = 0;
            }
        });
    }

    generate(count) {
        this.blocks = [];
        for (let i = 0; i < count; i++) {
            this.blocks.push(new Block());
        }
    }

    draw() {
        this.generate(this.blockCounts);
    }
}

MainCtrl.$inject = inject;