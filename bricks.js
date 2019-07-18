class Brick {
  constructor(ctx, src, x, y) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = src
    this._posX = x
    this._posY = y

    this._width = 50
    this._height = 50
  }


draw() {
  this._ctx.drawImage(this._image,
    this._posX,
    this._posY,
    this._width,
    this._height)
}
}

const whatTimeIsIt = function (angle) {
  let hour = Math.floor(angle / 30)
  hour.toString()
 console.log(hour)
  }