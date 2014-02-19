//翻转文字
$("document").ready(function() {
	var supports3DTransforms = document.body.style['webkitPerspective'] !== undefined || document.body.style['MozPerspective'] !== undefined;

	function linkify(selector, char_crossfade) {

		var cc = (char_crossfade != null) ? char_crossfade : "150";
		var ad = 0;

		if (supports3DTransforms) {
			$.each(selector, function() {
				var nodes = $(this);
				var char_count = $.trim(nodes.text()).length;
				var char_at = $.trim(nodes.text());
				nodes.empty();
				for (var i = 0; i < char_count; i++) {
					var node = char_at[i];
					if (node != " ") {
						nodes.append('<span  class="letter"  data-letter="' + node + '">' +
							'<span class="char2" style="-webkit-animation-delay:' + ((i * cc) + ad) +
							'ms;-moz-animation-delay:' + ((i * cc) + ad) + 'ms;' +
							'ms;-ms-animation-delay:' + ((i * cc) + ad) + 'ms;' +
							'ms;-o-animation-delay:' + ((i * cc) + ad) + 'ms;' +
							'ms;animation-delay:' + ((i * cc) + ad) + 'ms;" >' +
							node + '</span>' +
							node +
							'<span class="char1" style="-webkit-animation-delay:' + ((i * cc) + ad) +
							'ms;-moz-animation-delay:' + ((i * cc) + ad) + 'ms;' +
							'ms;-ms-animation-delay:' + ((i * cc) + ad) + 'ms;' +
							'ms;-o-animation-delay:' + ((i * cc) + ad) + 'ms;' +
							'ms;animation-delay:' + ((i * cc) + ad) + 'ms;" >' +
							node + '</span>' +
							'</span>');
					} else {
						nodes.append('<span class="letter"> &nbsp </span>');
					}
				}
				ad += (char_count * char_crossfade);
			});
		} else {
			selector.addClass("letter");
		}
	}

	//Add class name here followed by crossfade charactor animation delay in millisecond
	linkify($(".foo"), 200);
});

//下雪
canvas = document.getElementById('c')
var ctx = canvas.getContext('2d')
ctx.globalCompositeOperation = 'lighter'

var resize = function() {
	ctx.canvas.width = window.innerWidth
	ctx.canvas.height = document.getElementById("jum").offsetHeight
}
resize()
window.addEventListener('resize', resize)

Particle = function(opacity, oFade, size, sFade, innerSizeFactor, x, ySpeed, ySpeedFade, xSpeed, xSpeedFade) {
	this.d = false
	this.o = opacity
	this.oF = oFade
	this.s = size
	this.sF = sFade
	this.iSF = innerSizeFactor
	this.iS = this.s * this.iSF
	this.x = x
	this.xS = xSpeed
	this.xSF = xSpeedFade
	this.yS = ySpeed
	this.ySF = ySpeedFade
	this.y = -50
}
Particle.prototype.update = function() {
	if (this.d == false) {

		var o = this.o - this.oF * dt
		if (o < 0) {
			this.d = true
		} else {
			this.o = o
		}

		var s = this.s - this.sF * dt
		if (s < 0) {
			this.d = true
		} else {
			this.s = s
		}

		this.iS -= this.sF * this.iSF * dt
		this.yS -= this.ySF * dt
		this.xS -= this.xSF * dt

		this.x += this.xS * dt
		this.y += this.yS * dt
	}
}
Particle.prototype.draw = function() {
	if (this.d == false) {
		ctx.setTransform(1, 0, 0, 1, this.x, this.y)
		var grd = ctx.createRadialGradient(this.s, this.s, this.iS, this.s, this.s, this.s)

		ctx.globalAlpha = this.o
		grd.addColorStop(0, '#fff')
		grd.addColorStop(1, 'rgba(255,255,255,0)')
		ctx.fillStyle = grd
		ctx.fillRect(0, 0, this.s * 2, this.s * 2)
	}
}

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

var t, dt, to,
	particles = [],
	n = 0

	loop = function() {
		n += 1
		t = performance.now()
		dt = t - to
		to = t

		for (var i = 0; i < canvas.width / 200; i++) {
			particles.push(new Particle(Math.random() * 0.3 + 0.01, Math.random() * 0.0001, Math.random() * 10 + 5, Math.random() * 0.003 + 0.002, Math.random() * 0.5, Math.random() * canvas.width, Math.random() * 0.1 + 0.05, Math.random() * 0.00001, Math.random() * -0.1, Math.random() * 0.00006 - 0.00003))
		}

		while (particles.length > 2000) {
			particles.shift()
		}

		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		for (var i = 0; i < particles.length; i++) {
			particles[i].draw()
		}

		for (var i = 0; i < particles.length; i++) {
			particles[i].update()
		}

		window.requestAnimationFrame(loop)
	}

to = performance.now()
window.requestAnimationFrame(loop)