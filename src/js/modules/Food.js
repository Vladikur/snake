export default class Food {
    constructor(ctx, box) {
        this._ctx = ctx
        this._box = box

        this.position = null
    }

    init() {
        this.position = {
            x: Math.floor(Math.random() * 15) * this._box,
            y: Math.floor(Math.random() * 15) * this._box
        }
    }

    render() {
        this._ctx.beginPath();
        const x = this.position.x + this._box / 2
        const y = this.position.y + this._box / 2
        const radius = this._box / 3
        const startAngle = 0
        const endAngle = Math.PI * 2
        this._ctx.fillStyle = "#dc475c"
        this._ctx.arc(x, y, radius, startAngle, endAngle);
        this._ctx.fill();
    }
}
