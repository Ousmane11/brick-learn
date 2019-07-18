const Points = {
  ctx: undefined,
  init: function (ctx) {
    this.ctx = ctx
    this.ctx.font = "30px sans-serif"
  },

  update: function (score) {
    this.ctx.fillStyle = "#451a19"
    this.ctx.fillText(Math.floor(score), window.innerWidth - 100, window.innerHeight/ 9.5);
  }
};
