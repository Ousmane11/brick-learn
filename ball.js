class Ball {

  constructor(ctx, width, height,xPaddle, yPaddle, brickGame) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "Images/metal_0002_sphere_600.png"

    this._width = width       
    this._height = height
    this._posX0 = xPaddle
    this._posX = this._posX0 

    this._posY0 = yPaddle
    this._posY = this._posY0

    this._velX = 5
    this._velY = 5

    this.brickGame = brickGame
  }
  draw() {
    this._ctx.drawImage(
      this._image,
      this._posX,
      this._posY,
      this._width,
      this._height)
  }
  
  move() {
    this._posY -= this._velY
   this._posX += this._velX
    if (this._posX > 0) {
      this._velX *= -1
    }
      if(this._posX < window.innerWidth - 40) {
        this._velX *= -1
      }
      if(this._posY < 0) {
        this._velY *= -1
      }
      this.ballCollision()
    //if (this._posY >= this._posY0 + 30 && this._posX === this._posX0) {
    //    alert ("wow")
    //  }
        //SI CHOCA CON EL PADDLE
      }
    
  
ballCollision() {
  //SI CHOCA CON EL PADDLE
  if (this._posX < this.brickGame.paddle._posX) {
    this._dx = this._posX - this.brickGame.paddle._posX
    
  } else {
    if (this._posX > this.brickGame.paddle._posX + this.brickGame.paddle._width) {
      this._dx = this._posX - (this.brickGame.paddle._posX + this.brickGame.paddle._width)
    } else {
      this._dx = 0
    }
  }
  if (this._posY < this.brickGame.paddle._posY) {
    this._dy = this._posY - this.brickGame.paddle._posY
  } else {
    if (this._posY > this.brickGame.paddle._posY + this.brickGame.paddle._height) {
      this._dy = this._posY - (this.brickGame.paddle._posY + this.brickGame.paddle._height)
    } else {
      this._dy = 0
    }
  }
  return this._dx * this._dx + this._dy * this._dy < this._width / 2
}

}

//class Ball {
//  constructor (ctx, w, h, xPaddle) {
//    this._ctx = ctx
//    this._image = new Image()
//    this._image.src = "Images/metal_0002_sphere_600.png"
//    this._posX0 = xPaddle
//    this._posX = this._posX0
//    this._posY = window.innerHeight - 80
//    this._width = w
//    this._height = h
//    this.setEventListener()
//    
//
//    this.radius = this._height / 2
//    this._maxX= window.innerWidth - this.radius
//    this._minX = 0 + this.radius
//    this._maxY= 0 + this.radius
//    
//    this._speedX = 12
//    this._speedY= 12
//    
//  }
//
//    move () {
//this._posX += this._speedX
//this._posY -= this._speedY
//if (this._posX + this._width > this._maxX) {
//  this._speedX *= -1
//  if (this._posY+ this._height > this._maxY) {
//    this._speedY *= -1
//      }
//}
//}
    

  

//  draw () {
//    this._ctx.drawImage(
//      this._image,
//      this._posX,
//      this._posY,
//      this._width,
//      this._height)
//  }
//  
//  setEventListener () {
//  addEventListener("keydown", (e) => {
//    console.log(e.keyCode)
//    if (e.keyCode === 32) {
//      this.move()
//
//      // this.ballInit = true esto era para darle suavidad al movimiento, no para disparar un evento
//      //this._posX = Math.random(700 - 100) //HACIA ARRIBA MEJOR
//      //this._posY = Math.random * (600 - 0)
//    }
//  })
//} 
//
//}
//






