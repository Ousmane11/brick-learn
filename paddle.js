class Paddle {
  constructor(ctx, w, h, x, y, keys) {
    this._ctx = ctx
    this._image = new Image()
    this._image.src = "Images/cowboy-hat-icon-60.png"
    this._posX = x
    this._posY = y
    this._width = w
    this._height = h
    this._velX = 10
    this._keys = keys
    this.setEventListener()
    this._direction = {
      LEFT: false,
      RIGHT: false
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
    if(this._direction.LEFT) {
      this._posX -= 10
    }
    if (this._direction.LEFT) {
      this._posX += 10
    }
   
  }
  

  setEventListener() {
      addEventListener('keydown', (e) => {
       console.log(this._direction.LEFT)
        switch (e.keycode) {
         case this._keys.LEFT:
            this._direction.LEFT = true
           break;
           case this._keys.RIGHT:
           this._direction.RIGHT = true
           break;
        }
           })

  
    addEventListener('keyup', (e) => {
      switch (e.keycode) {
        case this._keys.LEFT:
          this._direction.LEFT = false
          break;
        case this._keys.RIGHT:
          this._direction.RIGHT = false
          break;
      }
    })


  }
}
  // document.onkeydown = (e) => {
    //   console.log(this._direction.LEFT)
    //   switch(e.keycode) {
    //     case this._keys.LEFT:
    //       this._direction.LEFT = true
    //     break;
    //     case this._keys.RIGHT:
    //       this._direction.RIGHT = true
    //     break;
    //   } 
    // }

    // document.onkeyup = (e) => {
    //   switch (e.keycode) {
    //     case this._keys.LEFT:
    //       this._direction.LEFT = false
    //       break;
    //     case this._keys.RIGHT:
    //       this._direction.RIGHT = false
    //       break;
    //   }
    // }
 
