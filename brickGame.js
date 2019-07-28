window.onload = () => {
  document.getElementById('startb').onclick = function() {
    document.getElementById('startb').className = 'hide'
    brickGame.init()
  }
}

const brickGame = {
  title: 'Brick Lessons',
  author: 'Ousmane Yade',
  version: 1.0,
  license: null,
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  framescounter: 0,
  obstacles: [],
  dryballs: [],
  seconds: 0,
  minutes: 0,
  keys: {
    LEFT: 37,
    RIGHT: 39
  },
  fps: 60,
  falsy: false,
  secondFalsy: false,
  relPos: undefined,
  angle: undefined,
  newVelX: undefined,

  init: function() {
    this.canvas = document.getElementById('mycanvas')
    this.ctx = this.canvas.getContext('2d')
    this.setDimensions()
    this.setEventListener()
    this.start()
  },

  setDimensions: function() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
  },

  start: function() {
    this.reset()
    this.Interval = setInterval(() => {
      this.framescounter++
      this.framescounter % 60 === 0 ? this.seconds++ : null
      this.framescounter % 3600 === 0 ? this.minutes++ : null

      this.clearAll()
      this.clearDryBalls()
      this.moveAll()
      this.drawAll()
      this.jasmine()
      this.generateBalls()
      this.ballCollision()
      this.brickCollision()
      this.deflection()
      this.youWin()
    }, 1000 / this.fps)
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height)
    this.paddle = new Paddle(this.ctx, 180, 80, this.width / 2 - 90, this.height - 60, this.keys, brickGame)

    this.ball = new Ball(this.ctx, 40, 40, this.paddle._posX + 70, this.paddle._posY - 15, brickGame)
    this.pointsboard = Points
    this.pointsboard.init(this.ctx)
    this.points = 0

    //Row 1
    this.brick = new Brick(this.ctx, 'Images/0.png', 400, 75)
    this.brick1 = new Brick(this.ctx, 'Images/1.png', 450, 75)
    this.brick2 = new Brick(this.ctx, 'Images/0.png', 500, 75)
    this.brick3 = new Brick(this.ctx, 'Images/1.png', 550, 75)
    this.brick4 = new Brick(this.ctx, 'Images/0.png', 600, 75)
    this.brick5 = new Brick(this.ctx, 'Images/1.png', 650, 75)
    this.brick6 = new Brick(this.ctx, 'Images/0.png', 700, 75)
    this.brick7 = new Brick(this.ctx, 'Images/1.png', 750, 75)
    this.brick8 = new Brick(this.ctx, 'Images/0.png', 800, 75)
    this.brick9 = new Brick(this.ctx, 'Images/1.png', 850, 75)
    this.brick10 = new Brick(this.ctx, 'Images/0.png', 900, 75)
    this.brick11 = new Brick(this.ctx, 'Images/1.png', 950, 75)
    //Row 2
    this.brick12 = new Brick(this.ctx, 'Images/HTML5.svg', 500, 125)
    this.brick13 = new Brick(this.ctx, 'Images/CSS3.png', 550, 125)
    this.brick14 = new Brick(this.ctx, 'Images/javascript.png', 600, 125)

    this.brick16 = new Brick(this.ctx, 'Images/mongo.png', 700, 125)
    this.brick17 = new Brick(this.ctx, 'Images/expressjs.png', 750, 125)
    this.brick18 = new Brick(this.ctx, 'Images/react.png', 800, 125)
    this.brick19 = new Brick(this.ctx, 'Images/node.png', 850, 125)
    //Row 3
    this.brick20 = new Brick(this.ctx, 'Images/2.png', 400, 175)
    this.brick21 = new Brick(this.ctx, 'Images/4.png', 450, 175)
    this.brick22 = new Brick(this.ctx, 'Images/2.png', 500, 175)
    this.brick23 = new Brick(this.ctx, 'Images/4.png', 550, 175)
    this.brick24 = new Brick(this.ctx, 'Images/2.png', 600, 175)
    this.brick25 = new Brick(this.ctx, 'Images/4.png', 650, 175)
    this.brick26 = new Brick(this.ctx, 'Images/2.png', 700, 175)
    this.brick27 = new Brick(this.ctx, 'Images/4.png', 750, 175)
    this.brick28 = new Brick(this.ctx, 'Images/2.png', 800, 175)
    this.brick29 = new Brick(this.ctx, 'Images/4.png', 850, 175)
    this.brick30 = new Brick(this.ctx, 'Images/2.png', 900, 175)
    this.brick31 = new Brick(this.ctx, 'Images/4.png', 950, 175)
    //Row 4
    this.brick32 = new Brick(this.ctx, 'Images/node.png', 500, 225)
    this.brick33 = new Brick(this.ctx, 'Images/react.png', 550, 225)
    this.brick34 = new Brick(this.ctx, 'Images/expressjs.png', 600, 225)
    this.brick35 = new Brick(this.ctx, 'Images/mongo.png', 650, 225)
    this.brick36 = new Brick(this.ctx, 'Images/jasmine.png', 700, 225)
    this.brick37 = new Brick(this.ctx, 'Images/javascript.png', 750, 225)
    this.brick38 = new Brick(this.ctx, 'Images/CSS3.png', 800, 225)
    this.brick39 = new Brick(this.ctx, 'Images/HTML5.svg', 850, 225)
    //Row 5
    this.brick40 = new Brick(this.ctx, 'Images/0.png', 400, 275)
    this.brick41 = new Brick(this.ctx, 'Images/1.png', 450, 275)
    this.brick42 = new Brick(this.ctx, 'Images/0.png', 500, 275)
    this.brick43 = new Brick(this.ctx, 'Images/1.png', 550, 275)
    this.brick44 = new Brick(this.ctx, 'Images/0.png', 600, 275)
    this.brick45 = new Brick(this.ctx, 'Images/1.png', 650, 275)
    this.brick46 = new Brick(this.ctx, 'Images/0.png', 700, 275)
    this.brick47 = new Brick(this.ctx, 'Images/1.png', 750, 275)
    this.brick48 = new Brick(this.ctx, 'Images/0.png', 800, 275)
    this.brick49 = new Brick(this.ctx, 'Images/1.png', 850, 275)
    this.brick50 = new Brick(this.ctx, 'Images/0.png', 900, 275)
    this.brick51 = new Brick(this.ctx, 'Images/1.png', 950, 275)
    this.pushObstacles()
  },

  pushObstacles: function() {
    this.obstacles.push(
      this.brick,
      this.brick1,
      this.brick2,
      this.brick3,
      this.brick4,
      this.brick5,
      this.brick6,
      this.brick7,
      this.brick8,
      this.brick9,
      this.brick10,
      this.brick11,
      this.brick12,
      this.brick13,
      this.brick14,
      this.brick16,
      this.brick17,
      this.brick18,
      this.brick19,
      this.brick20,
      this.brick21,
      this.brick22,
      this.brick23,
      this.brick24,
      this.brick25,
      this.brick26,
      this.brick27,
      this.brick28,
      this.brick29,
      this.brick30,
      this.brick31,
      this.brick32,
      this.brick33,
      this.brick34,
      this.brick35,
      this.brick36,
      this.brick37,
      this.brick38,
      this.brick39,
      this.brick40,
      this.brick41,
      this.brick42,
      this.brick43,
      this.brick44,
      this.brick45,
      this.brick46,
      this.brick47,
      this.brick48,
      this.brick49,
      this.brick50,
      this.brick51
    )
  },

  drawAll: function() {
    this.background.draw()
    this.paddle.draw()
    this.ball.draw()
    this.dryballs.forEach(dryball => dryball.draw())
    this.obstacles.forEach(elm => elm.draw())
    this.drawPoints()
  },

  jasmine: function() {
    /*he sacado este elemento del array de obstáculos para que tenga una
    respuesta y sistema de puntos diferente al resto de bricks*/
    this.brick15 = new Brick(this.ctx, 'Images/jasmine.png', 650, 125)
    this.brick15.draw()

    if (
      this.ball._posY + 10 < this.brick15._posY + this.brick15._height &&
      this.ball._posX + 10 > this.brick15._posX &&
      this.ball._posX - 10 <= this.brick15._posX + this.brick15._width &&
      this.ball._posY > this.brick15._posY - this.brick15._height
    ) {
      this.points += 150
      this.love()
      this.ball._velY *= -1
    }
  },

  love: function() {
    this.heart = new Heart(this.ctx, 20, 20)
    this.heart.draw()
    //this.heart.move()
  },

  setEventListener: function() {
    addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        this.falsy = true
        this.secondFalsy = true
      }
    })
  },

  clearDryBalls: function() {
    //Vacía el array de plantas rodadoras para que no llenen la memoria
    this.dryballs.forEach((dryball, idx, array) => {
      if (dryball._posX > this.width) {
        array.splice(idx, 1)
      }
    })
  },

  clearAll: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },

  moveAll: function() {
    this.paddle.move()
    if (this.falsy) this.ball.move()
    this.dryballs.forEach(elm => elm.move())
  },

  ballCollision: function() {
    //Comprobamos si la bola colisiona con la pala
    if (this.secondFalsy) {
      if (
        this.ball._posX + this.ball._radius * 2 < this.paddle._posX + this.paddle._width &&
        this.ball._posX + this.ball._radius * 2 > this.paddle._posX &&
        this.ball._posY > this.height - this.paddle._height
      ) {
        this.ball._velY *= -1
      } else if (this.ball._posY > this.height + this.ball._radius) {
        this.gameover()
      }
    }
  },

  brickCollision: function() {
    this.obstacles.forEach((obstacle, idx, array) => {
      //Comprobamos si alguno de los obstaculos recibe colisión de la bola

      if (
        this.ball._posY + 10 < obstacle._posY + obstacle._height &&
        this.ball._posX + 10 > obstacle._posX &&
        this.ball._posX - 10 <= obstacle._posX + obstacle._width &&
        this.ball._posY > obstacle._posY - obstacle._height
      ) {
        this.ball._velY *= -1
        array.splice(idx, 1)
        this.points += 10
      }
    })
  },

  deflection: function() {
    this.relPos = this.ball._posX - this.paddle._width
    ;(this.angle = this.relPos * (Math.PI / this.paddle._width)), (this.newVelX = Math.cos(this.angle) * this.ball._velX)
  },

  generateBalls: function() {
    if (this.framescounter % 210 === 0) {
      this.dryballs.push(new WestBall(this.ctx, 70, 70, 450))
    }
  },

  drawPoints: function() {
    //dibuja el marcador
    this.pointsboard.update(this.points)
    this.ctx.fillStyle = '#451a19'
    this.ctx.font = '20px sans-serif'
    this.ctx.textAlign = 'center'
    this.ctx.lineWidth = 1.5
    this.ctx.strokeText('Points', this.width - 100, this.height / 15)
  },

  youWin: function() {
    if (this.obstacles.length <= 0) {
      clearInterval(this.Interval)
      this.clearAll()
      this.background = new Background(this.ctx, this.width, this.height)
      this.background.draw()

      this.ctx.font = 'bold 100px sans-serif'
      this.ctx.fillStyle = '#451a19'
      this.ctx.textAlign = 'center'
      this.ctx.fillText('You won!!!', this.width / 2, this.height / 2 - 50)
    }
  },

  //  rebirth: function () {
  //    addEventListener("keypress", (e) => {
  //      if (e.keyCode === 84) {
  //
  //        console.log(e.keyCode)
  //      }
  //    })
  //  },

  gameover: function() {
    clearInterval(this.Interval)
    this.clearAll()
    this.background = new Background(this.ctx, this.width, this.height)
    this.background.draw()

    this.ctx.style = '#451a19'
    this.ctx.font = 'bold 100px sans-serif'
    this.ctx.textAlign = 'center'
    this.ctx.lineWidth = 5
    this.ctx.strokeText('Game Over', this.width / 2, this.height / 2 - 50)

    //this.ctx.font = "bold 40px sans-serif"
    //this.ctx.style = "brown"
    //this.ctx.textAlign = "center"
    //this.ctx.strokeText("Press 'T' to try again ", this.width / 2, this.height / 2)
    //this.rebirth()
  }
}
