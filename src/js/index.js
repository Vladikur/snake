import 'normalize.css';
import '../scss/index.scss';
import Food from "./modules/Food";
import Ground from "./modules/Ground";
import Snake from "./modules/Snake";
import GameLogic from "./modules/GameLogic";
import Score from "./modules/Score";
import Params from "./modules/Params";

class GameSnake {
    constructor() {
        this.btnRestart = document.querySelector(".js-restart")
        this.popup = document.querySelector(".js-popup-game-over")
        this.canvas = document.querySelector(".js-canvas")

        if (!this.canvas) return

        this.ctx = this.canvas.getContext("2d")
        this.game = null
        this.box = 32
        this.map = 480

        this.canvas.width = this.map
        this.canvas.height = this.map

        this.food = new Food(this.ctx, this.box)
        this.ground = new Ground(this.ctx, this.map)
        this.snake = new Snake(this.ctx, this.box)
        this.logic = new GameLogic(this.box)
        this.score = new Score(this.game)
        this.params = new Params()

        this.food.init()
        this._addListeners()
        this._runGame()
    }

    _addListeners() {
        this.btnRestart.addEventListener('click', this._restartGame.bind(this))
    }

    _restartGame() {
        this.popup.classList.remove('_visible')

        this.score.reset()
        this.snake.reset()
        this.logic.reset()

        this._runGame()
    }

    _drawGame() {
        this.ctx.clearRect(0, 0, this.map, this.map);
        this.ground.render()
        this.food.render()
        this.snake.render()

        if (!this.logic.isPause) {
            let newHead = {
                x: this.snake.body[0].x,
                y: this.snake.body[0].y
            }

            if (newHead.x === this.food.position.x && newHead.y === this.food.position.y) {
                this.score.add()
                this.food.init()
            } else {
                this.snake.moveTail()
            }

            this.logic.checkDir()

            // const isSnakeOnBorder = this.logic.borderMode(newHead)
            // if (isSnakeOnBorder) this._stopGame()

            newHead = this.logic.freeMode(newHead)

            newHead = this.logic.move(newHead)

            const isSnakeBiteYourself = this.logic.eatTail(newHead, this.snake.body)
            if (isSnakeBiteYourself) this._stopGame()

            this.snake.moveHead(newHead)
        }
    }

    _stopGame() {
        clearInterval(this.game)

        this.popup.classList.add('_visible')
    }

    _runGame() {
        this.game = setInterval(this._drawGame.bind(this), 100)
    }
}

new GameSnake()

