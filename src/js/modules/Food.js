import food from './../../images/food.png';

export default class Food {
    constructor(ctx, box) {
        this._ctx = ctx
        this._box = box
        this._foodImg = null

        this.position = null

        this._create()
    }

    _create() {
        this._foodImg = new Image()
        this._foodImg.src = food
    }

    init() {
        this.position = {
            x: Math.floor(Math.random() * 17 + 1) * this._box,
            y: Math.floor(Math.random() * 15 + 3) * this._box
        }
    }

    render() {
        this._ctx.drawImage(this._foodImg, this.position.x, this.position.y)
    }
}
