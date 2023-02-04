export default class Score {
    constructor(ctx, box) {
        this._ctx = ctx
        this._box = box
        this.score = 0
    }

    render() {
        this._ctx.fillStyle = "white"
        this._ctx.font = "50px Arial"
        this._ctx.fillText(String(this.score), this._box * 2.5, this._box * 1.7)
    }

    add() {
        this.score ++
    }
}
