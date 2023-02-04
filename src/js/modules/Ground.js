import ground from './../../images/ground.png';

export default class Ground {
    constructor(ctx) {
        this._ctx = ctx
        this.groundImg = null

        this._create()
    }

    _create() {
        this.groundImg = new Image()
        this.groundImg.src = ground
    }

    render() {
        this._ctx.drawImage(this.groundImg, 0, 0)
    }
}
