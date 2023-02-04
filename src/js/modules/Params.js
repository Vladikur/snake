export default class Params {
    constructor() {
        //this.form = document.querySelector('.js-form')
        this.rads = document.getElementsByName('borders');

        //this._addEventListener()
    }

    _checkBorders() {
        this.rads.forEach((rad) => {
            if (rad.checked) console.log(rad.value)
        })
    }

    _addEventListener() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this._checkBorders()
        })
    }
}
