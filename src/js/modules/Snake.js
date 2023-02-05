export default class Snake {
    constructor(ctx, box) {
        this._ctx = ctx
        this._box = box
        this.body = []
        this._headColor = "#05925f"
        this._bodyColor = "#38b085"

        this.createHead()
    }

    reset() {
        this.body = []
        this.createHead()
    }

    createHead() {
        this.body[0] = {
            x: 7 * this._box,
            y: 7 * this._box
        }
    }

    render() {
        this.body.forEach((item, index) => {
            this._ctx.beginPath();
            this._ctx.strokeStyle = index === 0 ? this._headColor : this._bodyColor
            this._ctx.fillStyle = index === 0 ? this._headColor : this._bodyColor
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
