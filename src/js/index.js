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
        this.canvas = document.getElementById("snake")
        if (!this.canvas) return

        this.ctx = this.canvas.getContext("2d")
        this.game = null
        this.box = 32

        this.food = new Food(this.ctx, this.box)
        this.ground = new Ground(this.ctx)
        this.snake = new Snake(this.ctx, this.box)
        this.logic = new GameLogic(this.box)
        this.score = new Score(this.ctx, this.box)
        this.params = new Params()

        this.food.init()
        this._runGame()
    }

    _drawGame() {
        this.ground.render()
        this.food.render()
        this.snake.render()
        this.score.render()

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

            //const isSnakeOnBorder = this.logic.borderMode(newHead)
            //if (isSnakeOnBorder) this._stopGame()

            newHead = this.logic.freeMode(newHead)

            newHead = this.logic.move(newHead)

            const isSnakeBiteYourself = this.logic.eatTail(newHead, this.snake.body)
            if (isSnakeBiteYourself) this._stopGame()

            this.snake.moveHead(newHead)
        }
    }

    _stopGame() {
        clearInterval(this.game)
    }

    _runGame() {
        this.game = setInterval(this._drawGame.bind(this), 100)
    }
}

new GameSnake()

