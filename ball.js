class Ball {
  constructor (ctx, w, h, xPaddle) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "Images/metal_0002_sphere_600.png"
    this._posX0 = xPaddle
    this._posX = this._posX0
    this._posY = window.innerHeight - 80
    this._width = w
    this._height = h
    this.setEventListener()
    

    this.radius = this._height / 2
    this._maxX= window.innerWidth - this.radius
    this._minX = 0 + this.radius
    this._maxY= 0 + this.radius
    
    this._speedX = 12
    this._speedY= 12
    
  }

    move () {
this._posX += this._speedX
this._posY -= this._speedY
if (this._posX + this._width > this._maxX) {
  this._speedX *= -1
  if (this._posY+ this._height > this._maxY) {
    this._speedY *= -1
      }
}
}
    

  

  draw () {
    this._ctx.drawImage(
      this._image,
      this._posX,
      this._posY,
      this._width,
      this._height)
  }
  
  setEventListener () {
  addEventListener("keydown", (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 32) {
      this.move()

      // this.ballInit = true esto era para darle suavidad al movimiento, no para disparar un evento
      //this._posX = Math.random(700 - 100) //HACIA ARRIBA MEJOR
      //this._posY = Math.random * (600 - 0)
    }
  })
} 

}







