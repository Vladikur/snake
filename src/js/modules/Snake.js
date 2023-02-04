export default class Snake {
    constructor(ctx, box) {
        this._ctx = ctx
        this._box = box
        this.body = []

        this._createHead()
    }

    _createHead() {
        this.body[0] = {
            x: 7 * this._box,
            y: 7 * this._box
        }
    }

    render() {
        this.body.forEach((item, index) => {
            this._ctx.beginPath();
            this._ctx.strokeStyle = index === 0 ? "#05925F" : "#6ba490"
            this._ctx.fillStyle = index === 0 ? "#05925F" : "#6ba490"
            this._ctx.roundRect(item.x, item.y, this._box, this._box, 8)
            this._ctx.stroke();
            this._ctx.fill();
        })
    }

    moveTail() {
        this.body.pop()
    }

    moveHead(newHead) {
        this.body.unshift(newHead)
    }
}
