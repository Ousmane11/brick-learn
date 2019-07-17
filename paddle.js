class Paddle {
  constructor(ctx, w, h, x, y, keys, brickGame) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "Images/cowboy-hat-icon-60.png"
    this._posX = x
    this._posY = y
    this._width = w
    this._height = h
    this._velX = 15
    this._keys = keys
    this._dx = undefined
    this._dy= undefined
    this.setEventListener()
    //this.ballCollision()
   this._direction = {
      left: false,
      right: false
    }
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

  //ballCollision() {
  //  //SI CHOCA CON EL PADDLE
  //  if (this.brickGame.ball._posX < this._posX) {
  //    this._dx = this.brickGame.ball._posX - this._posX
  //  } else {
  //    if (this.brickGame.ball._posX > this._pos + this._width) {
  //      this._dx = this.brickGame.ball._posX - (this._pos + this._width)
  //    } else {
  //      this._dx = 0
  //    }
  //  }
//
  //  if (this.brickGame.ball._posY < this._posY) {
  //    this._dy = this.brickGame.ball._posY - this._posY
  //  } else {
  //    if (this.brickGame.ball._posY > this._posY + this._height) {
  //      this._dy = this.brickGame.ball._posY - (this._posY + this._height)
  //    } else {
  //      this._dy = 0
  //    }
  //  }
  //  return this._dx * this._dx + this._dy * this._dy < this.brickGame.ball._width / 2
  //}

  move() {
    
    if(this._direction.left) {
      if (this._posX > 0) {
       this._posX -= this._velX
       if (this.brickGame.falsy === false) {
       this.brickGame.ball._posX = this._posX+70
       }
      }
    }
    if (this._direction.right) {
      if (this._posX < window.innerWidth -180) {
       this._posX += this._velX
       if (this.brickGame.falsy === false) {
       this.brickGame.ball._posX = this._posX+70
       }
    }
  }
  //If this.direction is true move the paddle smoothly with the arrows. If this.brickGame.falsy is false, make the ball follow the hat.
  // Else if it's falsy,(when we press space to release the ball) follow the movement instructions programmed specifically for the ball in ball.js.
   
  //  if (this.ballCollision === true) {
  //    this.ball._velY *= -1
  //  }
}


 
  setEventListener() {
  
      addEventListener('keydown', (e) => {
        switch (e.keyCode) {
         case 37:
           new Paddle(this._ctx,)
            this._direction.left = true
      
           break;
           case 39:
           this._direction.right = true
           break;
        }
           })

  
    addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 37:
          this._direction.left = false
          break;
        case 39:
          this._direction.right = false
          break;
      }
    })


  }
}

 
