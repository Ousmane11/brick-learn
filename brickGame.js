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
  keys: {
    LEFT: 37,
    RIGHT: 39 
  },
  fps: 60,
  
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
// this.setEventListeners()
//this.paddle.setEventListeners()  esto lo tengo en comentado en paddle page
  this.Interval = setInterval(() => {
    this.clearAll()
    this.moveAll()
    this.drawAll()
  },1000 / this.fps)
},

reset: function () {
this.background = new Background(this.ctx,this.width,this.height)
this.paddle = new Paddle(this.ctx, 180, 80,this.width/2 - 90 , this.height -60,this.keys)
},

drawAll: function () {
  this.background.draw()
  this.paddle.draw()
},

clearAll:function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },

  moveAll: function () {
    this.paddle.move()
  }

// setEventListeners: function () {
//   document.onclick = event => {
//     console.log(event)
//   }
//     document.onkeydown = (e) => {
//       switch (e.keycode) {
//         case this.keys.LEFT:
//           alert("yay")
//           break;
//         case this.keys.RIGHT:
//           this._posX += 10

//           break;
    
//     }
//   }
// }



}