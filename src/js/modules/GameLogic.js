export default class GameLogic {
    constructor(box) {
        this._box = box
        this._dir = null
        this._newDir = null
        this._direction = {
            r: "right",
            l: "left",
            u: "up",
            d: "down",
        }
        this.isPause = false

        document.addEventListener("keydown", this._eventHandler.bind(this))
    }

    _eventHandler(e) {
        if (e.keyCode === 32) this.isPause = !this.isPause
        if (e.keyCode === 65) this._newDir = this._direction.l
        if (e.keyCode === 87) this._newDir = this._direction.u
        if (e.keyCode === 68) this._newDir = this._direction.r
        if (e.keyCode === 83) this._newDir = this._direction.d
    }

    checkDir() {
        if (this._dir === null) this._dir = this._newDir
        if (this._dir === this._direction.u && this._newDir !== this._direction.d) this._dir = this._newDir
        if (this._dir === this._direction.d && this._newDir !== this._direction.u) this._dir = this._newDir
        if (this._dir === this._direction.r && this._newDir !== this._direction.l) this._dir = this._newDir
        if (this._dir === this._direction.l && this._newDir !== this._direction.r) this._dir = this._newDir
    }

    eatTail(head, arr) {
        let isSnakeBiteYourself = false

        arr.forEach((el) => {
            if (head.x === el.x && head.y === el.y) {
                isSnakeBiteYourself = true
            }
        })

        return isSnakeBiteYourself
    }

    move(head) {
        const coefficient = this._box
        if (this._dir === this._direction.d) head.y += coefficient
        if (this._dir === this._direction.u) head.y -= coefficient
        if (this._dir === this._direction.l) head.x -= coefficient
        if (this._dir === this._direction.r) head.x += coefficient
        return head
    }

    borderMode(head) {
        if (head.x < 1 * this._box || head.x > this._box * 13
            || head.y < 1 * this._box || head.y > this._box * 13) {
            return true
        }
    }

    freeMode(head) {
        if (head.x < 1 * this._box && this._dir === this._direction.l) {
            head.x = 15 * this._box
        }
        if (head.x > 13 * this._box && this._dir === this._direction.r) {
            head.x = -1 * this._box
        }
        if (head.y < 1 * this._box && this._dir === this._direction.u) {
            head.y = 15 * this._box
        }
        if (head.y > 13 * this._box && this._dir === this._direction.d) {
            head.y = -1 * this._box
        }
        return head
    }
}
