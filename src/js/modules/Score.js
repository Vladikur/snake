export default class Score {
    constructor() {
        this.scoreElement = document.querySelector('.js-score')
        this.score = 0

        this._create()
    }

    _create() {
        this.scoreElement.textContent = this.score
    }

    reset() {
        this.score = 0
        this._create()
    }

    add() {
        this.score ++
        this._create()
    }
}
