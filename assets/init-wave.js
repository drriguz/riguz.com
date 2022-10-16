new SineWaves({ 
    el: document.getElementById("waves"), 
    speed: 2, 
    width: function () { return 600  }, 
    height: function () { return 200 }, 
    ease: "SineInOut", wavesWidth: "60%", waves: [{ timeModifier: 3, lineWidth: 4, amplitude: -25, wavelength: 25 }, { timeModifier: 2, lineWidth: 4, amplitude: -50, wavelength: 50 }, { timeModifier: 1, lineWidth: 4, amplitude: -100, wavelength: 100 }, { timeModifier: .5, lineWidth: 4, amplitude: -125, wavelength: 125 }, { timeModifier: 1.25, lineWidth: 4, amplitude: -150, wavelength: 150 }], resizeEvent: function () { var e = this.ctx.createLinearGradient(0, 0, this.width, 0); e.addColorStop(0, "rgba(24, 143, 255, 1)"), e.addColorStop(.5, "rgba(70, 78, 86, 1)"); for (var t = -1, a = this.waves.length; ++t < a;)this.waves[t].strokeStyle = e; t = void 0, a = void 0, e = void 0 } });