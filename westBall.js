class WestBall {

  constructor(ctx, width, height, y) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "Images/Planta-rodadora.gif"

    this._width = width
    this._height = height
    this._posX = 0
    this._posY = y
    this._velX = 3
    this._velY = 0
    this._gravity = .25
  }

  draw() {
    this._ctx.drawImage(this._image, this._posX, this._posY, this._width, this._height)
  }

  move() {
    this._posX += this._velX += .1
    this._velY += this._gravity
    this._posY += this._velY

    this._posY > window.innerHeight - this._height ? this._velY *= -1 : null
  }
}