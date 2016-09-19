export class Block {
    constructor() {

        this.url = 'http://cs2.livemaster.ru/storage/b5/83/ec61fb3bbacfe76ca646f23b17cf--materialy-dlya-tvorchestva-foamiran-zefirnyj-zelenyj.jpg';
        this.width = this.randomInteger(30, 150);
        this.height = 200;
    }

    randomInteger(min, max) {
        var rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
    }
}