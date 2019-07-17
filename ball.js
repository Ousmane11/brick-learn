class Ball {

  constructor(ctx, width, height,xPaddle, yPaddle, brickGame) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "Images/metal_0002_sphere_600.png"

    this._width = width       
    this._height = height
    this._radius = this._width / 2
    this._posX0 = xPaddle
    this._posX = this._posX0 

    this._posY0 = yPaddle
    this._posY = this._posY0

    this._velX = 8
    this._velY = 8
  
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
    }
      
     
    
  
  

}


