class Paddle {
  constructor(ctx, w, h, x, y, keys) {
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
      this._posX > 0 ? this._posX -= this._velX : null
    }
    if (this._direction.right) {
      this._posX < window.innerWidth -180 ? this._posX += this._velX : null
    }
   
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

 
