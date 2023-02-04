export default class Ground {
    constructor(ctx, map) {
        this._ctx = ctx
        this._map = map
    }

    render() {
        this._ctx.fillStyle = '#2e3146'
        this._ctx.fillRect(0, 0, this._map, this._map)
    }
}
