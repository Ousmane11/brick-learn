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
    this.setEventListener()
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
}
/*
isCollision() {
    return this.obstacles.some(obstacle => {
      //Comprobamos si alguno de los obstaculos colisiona.
      return (
        this.player.x + this.player.width >= obstacle.x && //Choque con lado izquierdo del obstaculo
        this.player.x < obstacle.x + obstacle.width && //Choque con lado derecho del obstaculo
        this.player.y < obstacle.y + obstacle.height //Choque con lado de abajo del obstaculo
      )
    })
  }, */
 
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

 
