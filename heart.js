class Heart {

  constructor(ctx, width, height) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "heart.png"

    this._width = width
    this._height = height
    this._posX = 650
    this._posY = 125
    this._velY = 3
    this._gravity = 3
  }

  draw() {
    this._ctx.drawImage(this._image, this._posX, this._posY, this._width, this._height)
  }

  move() {
    this._velY += this._gravity
    this._posY += this._velY
  }
}