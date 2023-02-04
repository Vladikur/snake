export default class Snake {
    constructor(ctx, box) {
        this._ctx = ctx
        this._box = box
        this.body = []

        this._createHead()
    }

    _createHead() {
        this.body[0] = {
            x: 9 * this._box,
            y: 10 * this._box
        }
    }

    render() {
        this.body.forEach((item, index) => {
            this._ctx.fillStyle = index === 0 ? "green" : "red"
            this._ctx.fillRect(item.x, item.y, this._box, this._box)
        })
    }

    moveTail() {
        this.body.pop()
    }

    moveHead(newHead) {
        this.body.unshift(newHead)
    }
}
