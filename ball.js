class Ball {
  constructor (ctx, w, h, xPaddle) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "Images/metal_0002_sphere_600.png"
    this._posX = xPaddle
    this._posY = window.innerHeight - 80
    this._width = w
    this._height = h
    this._velX = 3
    this._velY= 5
    this.ballInit = false
    this.setEventListener()
  }

    move () {
  if (this.ballInit === true) {
this._posX += this._velX
this._posY += this._velY
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
  
  setEventListener() {
    addEventListener("keydown", (e) => {
      console.log(e.keyCode)
if (e.keyCode === 90) {
  this.ballInit = true
  this._posX = Math.random(700 - 100)
  this._posY = Math.random * (600 - 0)
    }
  })
 } 

}







