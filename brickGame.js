window.onload = () => brickGame.init()

const brickGame = {
  title: "Brick Lessons",
  author: "Ousmane Yade",
  version: 1.0,
  license: null,
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  framescounter: 0,
  seconds: 0,
  minutes: 0,
  keys: {
    LEFT: 37,
    RIGHT: 39 
  },
  fps: 60,
  //bricks: [],
  
init: function () {
this.canvas = document.getElementById("mycanvas")
this.ctx = this.canvas.getContext("2d")
this.setDimensions()
this.start()
},

setDimensions: function () {
  this.width = window.innerWidth
  this.height = window.innerHeight
  this.canvas.width = this.width
  this.canvas.height = this.height
},

start: function () {
this.reset ()
 // this.bricksF()
  this.Interval = setInterval(() => {
    
    this.framescounter++
    this.framescounter % 60 === 0 ? this.seconds++ : null
    this.framescounter % 3600 === 0 ? this.minutes++ : null
    this.clearAll()
    this.moveAll()
    this.drawAll()
    
  },1000 / this.fps)
},

reset: function () {
this.background = new Background(this.ctx,this.width,this.height)
this.paddle = new Paddle(this.ctx, 180, 80,this.width/2 - 90 , this.height -60,this.keys)
this.ball = new Ball(this.ctx, 40, 40, this.paddle._posX-70)
//Row 1
this.brick = new Brick(this.ctx,"Images/0.png",400, 100)
this.brick1 = new Brick(this.ctx, "Images/1.png", 450, 100)
this.brick2 = new Brick(this.ctx, "Images/0.png", 500, 100)
this.brick3 = new Brick(this.ctx, "Images/1.png", 550, 100)
this.brick4 = new Brick(this.ctx, "Images/0.png", 600, 100)
this.brick5 = new Brick(this.ctx, "Images/1.png", 650, 100)
this.brick6 = new Brick(this.ctx, "Images/0.png", 700, 100)
this.brick7 = new Brick(this.ctx, "Images/1.png", 750, 100)
this.brick8 = new Brick(this.ctx, "Images/0.png", 800, 100)
this.brick9 = new Brick(this.ctx, "Images/1.png", 850, 100)
this.brick10 = new Brick(this.ctx, "Images/0.png", 900, 100)
this.brick11 = new Brick(this.ctx, "Images/1.png", 950, 100)
//Row 2
  this.brick12 = new Brick(this.ctx, "Images/HTML5.svg", 500, 150)
  this.brick13 = new Brick(this.ctx, "Images/CSS3.png", 550, 150)
  this.brick14 = new Brick(this.ctx, "Images/javascript.png", 600, 150)
  this.brick15 = new Brick(this.ctx, "Images/jasmine.png", 650, 150)
  this.brick16 = new Brick(this.ctx, "Images/mongo.png", 700, 150)
  this.brick17 = new Brick(this.ctx, "Images/expressjs.png", 750, 150)
  this.brick18 = new Brick(this.ctx, "Images/react.png", 800, 150)
  this.brick19 = new Brick(this.ctx, "Images/node.png" , 850, 150)
  //Row 3
  this.brick20 = new Brick(this.ctx, "Images/2.png", 400, 200)
  this.brick21 = new Brick(this.ctx, "Images/4.png", 450, 200)
  this.brick22 = new Brick(this.ctx, "Images/2.png", 500, 200)
  this.brick23 = new Brick(this.ctx, "Images/4.png", 550, 200)
  this.brick24 = new Brick(this.ctx, "Images/2.png", 600, 200)
  this.brick25 = new Brick(this.ctx, "Images/4.png", 650, 200)
  this.brick26 = new Brick(this.ctx, "Images/2.png", 700, 200)
  this.brick27 = new Brick(this.ctx, "Images/4.png", 750, 200)
  this.brick28 = new Brick(this.ctx, "Images/2.png", 800, 200)
  this.brick29 = new Brick(this.ctx, "Images/4.png", 850, 200)
  this.brick30 = new Brick(this.ctx, "Images/2.png", 900, 200)
  this.brick31 = new Brick(this.ctx, "Images/4.png", 950, 200)
  //Row 4
  this.brick32 = new Brick(this.ctx, "Images/node.png", 500, 250)
  this.brick33 = new Brick(this.ctx, "Images/react.png", 550, 250)
  this.brick34 = new Brick(this.ctx, "Images/expressjs.png", 600, 250)
  this.brick35 = new Brick(this.ctx, "Images/mongo.png", 650, 250)
  this.brick36 = new Brick(this.ctx, "Images/jasmine.png", 700, 250)
  this.brick37 = new Brick(this.ctx, "Images/javascript.png", 750, 250)
  this.brick38 = new Brick(this.ctx, "Images/CSS3.png", 800, 250)
  this.brick39 = new Brick(this.ctx, "Images/HTML5.svg", 850, 250)
//Row 5
  this.brick40 = new Brick(this.ctx, "Images/0.png", 400, 300)
  this.brick41 = new Brick(this.ctx, "Images/1.png", 450, 300)
  this.brick42 = new Brick(this.ctx, "Images/0.png", 500, 300)
  this.brick43 = new Brick(this.ctx, "Images/1.png", 550, 300)
  this.brick44 = new Brick(this.ctx, "Images/0.png", 600, 300)
  this.brick45 = new Brick(this.ctx, "Images/1.png", 650, 300)
  this.brick46 = new Brick(this.ctx, "Images/0.png", 700, 300)
  this.brick47 = new Brick(this.ctx, "Images/1.png", 750, 300)
  this.brick48 = new Brick(this.ctx, "Images/0.png", 800, 300)
  this.brick49 = new Brick(this.ctx, "Images/1.png", 850, 300)
  this.brick50 = new Brick(this.ctx, "Images/0.png", 900, 300)
  this.brick51 = new Brick(this.ctx, "Images/1.png", 950, 300)
  
},

//board: function () { 
//const board= [
//    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
//  ]
//  
//  for(let i = 0; i< this.board.length; i++) {
//    const row = this.board[i]
//for (let j = 0; j < row.length; j++) {
//  switch (this.board[i][j]) {
//    case 0:
//      new Brick(this.ctx, "./Images/0.png")
//      //this.brick.draw()
//      break;
//    case 1:
//      break;
//    case 2:
//      break;
//    case 3:
//      break;
//    case 4:
//      break;
//
//  }
//}
//  }
//},

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

drawAll: function () {
  this.background.draw()
  this.paddle.draw()
  this.ball._posX = this.paddle._posX +70  //no actualizaba la pos de paddle para dibujar ball.
  this.ball.draw()
  this.brick.draw()
  this.brick1.draw()
  this.brick2.draw()
  this.brick3.draw()
  this.brick4.draw()
  this.brick5.draw()
  this.brick6.draw()
  this.brick7.draw()
  this.brick8.draw()
  this.brick9.draw()
  this.brick10.draw()
  this.brick11.draw()
  this.brick12.draw()
  this.brick13.draw()
  this.brick14.draw()
  this.brick15.draw()
  this.brick16.draw()
  this.brick17.draw()
  this.brick18.draw()
  this.brick19.draw()
  this.brick20.draw()
  this.brick21.draw()
  this.brick22.draw()
  this.brick23.draw()
  this.brick24.draw()
  this.brick25.draw()
  this.brick26.draw()
  this.brick27.draw()
  this.brick28.draw()
  this.brick29.draw()
  this.brick30.draw()
  this.brick31.draw()
  this.brick32.draw()
  this.brick33.draw()
  this.brick34.draw()
  this.brick35.draw()
  this.brick36.draw() 
  this.brick37.draw()
  this.brick38.draw() 
  this.brick39.draw()
  this.brick40.draw()
  this.brick41.draw()
  this.brick42.draw()
  this.brick43.draw()
  this.brick44.draw()
  this.brick45.draw()
  this.brick46.draw()
  this.brick47.draw()
  this.brick48.draw()
  this.brick49.draw()
  this.brick50.draw()
  this.brick51.draw()
},

clearAll:function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },

  moveAll: function () {
    this.paddle.move()
  },
  
  //bricksF: function () {
  //  for (let i= 0; i <= 10; i++){
  //    this.bricks.push(new Brick(this.ctx, "Images/0.png", 300, 100))
  //  }
  //  console.log(this.bricks)
  //}


}
