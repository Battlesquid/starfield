const name = document.getElementById('name');
const plax = document.getElementById('plax');
const distance = document.getElementById('distance');
const appmag = document.getElementById('appmag');
const lumin = document.getElementById('lumin');
const temp = document.getElementById('temp');
const wave = document.getElementById('wave');
const radius = document.getElementById('radius');
const leftnav = document.getElementById('left');
const rightnav = document.getElementById('right');
const startbtn = document.getElementById('start-btn');
const mass = document.getElementById('mass');
const classify = document.getElementById('classification');

const planetparent = document.getElementById('plan');

const orbrad = document.getElementById('orbrad');
const pmass = document.getElementById('pmass');
const prad = document.getElementById('prad');
const dens = document.getElementById('dens');

let space = new StarSystem();

let index = 0;
let started = false;

function setup() {
	// createCanvas(window.innerWidth, window.innerHeight);
	createCanvas(windowWidth, windowHeight);
	//parallax, wavelength, apparent mag, distance, luminosity, temperature

	space.addStar("Aidormian", 0.183, 366, 1.08, 17.80, 9.454, 7926, 1.647, "Main Sequence", true, 1.021, 4.404, 1.882, 3.641);
	space.addStar("Altia", 0.117, 722, 7.36, 27.90, 0.0712, 4017, 0.556, "Main Sequence", true, 0.42, 32.47, 5.010, 1.423);
	space.addStar("Aquashan", 0.111, 763, 7.90, 29.40, 0.048, 3803, 0.51, "Main Sequence", true, 2.852, 71.01, 7.117, 1.086);
	space.addStar("Athiraca", 0.312, 913, 706, 10.50, 0.0131, 3176, 0.382, "Main Sequence", true, 0.63, 3.407, 1.508, 5.480);
	space.addStar("Attos", 0.110, 608, 6.14, 29.70, 0.246, 4773, 0.733, "Main Sequence", true, 0.651, 6.105, 2.098, 3.647);
	space.addStar("Avan", 0.142, 269, -0.78, 23.00, 86.81, 10787, 2.694, "Main Sequence");
	space.addStar("Ayaronn", 0.278, 383, 0.53, 11.70, 6.810, 7572, 1.531, "Main Sequence", true, 2.622, 297.0, 14.57, 0.53);
	space.addStar("Brash", 0.310, 669, 4.65, 10.50, 0.123, 4336, 0.629, "Main Sequence", true, 1.710, 3.201, 1.607, 4.256);
	space.addStar("Brumir", 0.318, 427, 1.09, 10.30, 3.087, 6784, 1.284, "Main Sequence", true, 1.500, 6.308, 2.213, 3.207);
	space.addStar("Cedstlimo", 0.181, 523, 3.90, 18, 0.719, 5540, 0.929, "Main Sequence", true, 1.291, 1.600, 1.281, 4.195);
	space.addStar("Cudreirit", 0.660, 1258, 7.94, 4.9, 0.00131, 2305, 0.229, "Main Sequence", true, 2.721, 65.29, 6.633, 1.234);
	space.addStar("Datroddyn", 0.109, 359, 7.33, 29.90, 0.0839, 8079, 0.149, "White Dwarf");
	space.addStar("Daurgato", 0.179, 412, 2.05, 18.20, 4.038, 7042, 1.363, "Main Sequence", true, 4.472, 754.4, 20.17, 0.507);

	// space.addStar("Dymorn", 0.448, 868, -5.47, 7.3, 655.2, 3341, 77.188);

	space.addStar("Elianthe", 0.213, 707, 5.90, 15.30, 0.0824, 4099, 0.575, "Main Sequence");
	space.addStar("Emian", 0.111, 833, 8.59, 29.40, 0.0254, 3480, 0.442, "Main Sequence");
	space.addStar("Enzorban", 0.127, 1094, 1043, 25.70, 0.00358, 2651, 0.286, "Main Sequence", true, 0.2, 102.2, 6.929, 1.693);
	space.addStar("Eolos", 0.365, 1709, 11.62, 8.9, 0.000145, 1697, 0.141, "Main Sequence");
	space.addStar("Giritlint", 0.104, 331, 1.51, 31.40, 19.60, 8771, 1.936, "Main Sequence", true, 2.782, 5.005, 2.002, 3.440);
	space.addStar("Goibora", 0.332, 561, 3.12, 9.8, 0.438, 5172, 0.833, "Main Sequence");
	space.addStar("Gwarn", 0.093, 898, 9.56, 35.10, 0.0148, 3229, 0.392, "Main Sequence");
	space.addStar("Hornorard", 0.163, 333, 0.59, 20, 18.73, 8716, 1.917, "Main Sequence", true, 1.591, 66.51, 8.383, 0.623);
	space.addStar("Ilnidel", 0.043, 857, 10.88, 75.90, 0.0206, 3382, 0.423, "Main Sequence");
	space.addStar("Indangolac", 0.045, 1001, 11.99, 72.50, 0.00677, 2897, 0.33, "Main Sequence", true, 0.14, 87.64, 7.326, 1.229);
	space.addStar("Iriato", 0.138, 129, 9.30, 23.60, 0.00856, 22401, 0.0062, "White Dwarf");

	// space.addStar("Issai", 0.028, 133.0, -6.76, 116.5, 551169, 21730, 52.891);

	space.addStar("Ivariomer", 0.157, 394, 1.99, 20.80, 5.529, 7356, 1.462, "Main Sequence", true, 3.211, 98.65, 9.887, 0.563);
	space.addStar("Jent", 0.087, 510, 5.29, 37.50, 0.867, 5686, 0.969, "Main Sequence", true, 0.451, 4.507, 2.004, 3.090);
	space.addStar("Jhaleb", 0.134, 162, -4.62, 24.30, 3354, 17926, 6.063, "Main Sequence");
	space.addStar("Kaikkar", 0.225, 435, 1.99, 14.50, 2.713, 6663, 1.248, "Main Sequence", true, 2.541, 23.48, 4.387, 1.533);

	space.updateInfo(index);
	space.updatePlanetInfo(index);

	// for (let i = 0; i < space.planets.length; i++) {
	// 	space.planets[i].deg++;
	// 	let star = space.system[space.planets[i].id];
	// 	alert(star.name);
	// }
	// alert(space.system[0].scaledist);
}


function draw() {
	background(11);
	push();
	noStroke();
	fill(0, 0, 255);
	ellipse(0, 0, 1, 1);
	// push();
	// noFill();
	// stroke(255);
	// ellipse(0, 0, 100, 100);
	// pop();
	pop();
	camera.zoom = lerp(camera.zoom, 35 / space.system[index].rad, 0.1);
	space.focusOnStar(space.system[index]);
	space.updateSystem();
}


function StarSystem() {
	this.system = [];
	this.planets = {};
	this.currentStar = null;
	//parallax, wavelength, apparent mag, distance, luminosity, temperature
	this.addStar = (n, p, w, a, d, l, t, r, classif, planet, orbrad, me, re, dens) => {
		this.system.push({
			name: n,
			plax: p,
			wave: w,
			appmag: a,
			dist: d,
			scaledist: (d * 9460730472580.8),
			lumin: l,
			temp: t,
			deg: int(random(0, 360)),
			rad: r,
			scalerad: (r * 695508),
			classify: classif,
			hasp: planet,
			props: {
				hovering: false,
				focused: false
			}
		});
		if (this.system[this.system.length - 1].hasp) {
			this.addPlanet(this.system.length - 1, orbrad, me, re, dens);
		}
		this.system[this.system.length - 1].mass = Math.pow(parseFloat(this.system[this.system.length - 1].lumin), (1 / 3.5));

		// if (planet === true) {
		// 	// alert(this.system[this.system.length - 1].name);
		// 	this.addPlanet(this.system.length - 1);

		// }
		this.currentStar = this.system[this.system.length - 1];
	};

	this.focusOnStar = (star) => {
		let x = cos(star.deg) * star.dist;
		let y = sin(star.deg) * star.dist;

		// let x = cos(star.deg) * star.scaledist;
		// let y = sin(star.deg) * star.scaledist;
		camera.position.x = lerp(camera.position.x, x, 0.1);
		camera.position.y = lerp(camera.position.y, y, 0.1);
	};

	this.addPlanet = (index, orbrad, me, re, dens) => {
		let star = this.system[index];
		let x = cos(star.deg) * star.dist;
		let y = sin(star.deg) * star.dist;
		// this.planets.push({
		// 	deg: star.deg,
		// 	id: this.system.length - 1
		// });
		this.planets[index] = {
			deg: star.deg,
			speed: random(),
			orbrad: orbrad,
			me: me,
			re: re,
			dens: dens
		};
		console.re.log(this.planets);
		// alert(this.system[this.planets[this.system.length - 1].id].name);
	};

	this.updateInfo = (e) => {
		name.innerHTML = this.system[e].name;
		plax.innerHTML = this.system[e].plax;
		distance.innerHTML = this.system[e].dist;
		appmag.innerHTML = this.system[e].appmag;
		lumin.innerHTML = this.system[e].lumin;
		temp.innerHTML = this.system[e].temp;
		wave.innerHTML = this.system[e].wave;
		radius.innerHTML = this.system[e].rad;
		mass.innerHTML = this.system[e].mass;
		classify.innerHTML = this.system[e].classify;
	};

	this.updatePlanetInfo = (d) => {
		if (this.planets.hasOwnProperty(d)) {
			planetparent.style.display = "block";
			orbrad.innerHTML = this.planets[d].orbrad;
			pmass.innerHTML = this.planets[d].me;
			prad.innerHTML = this.planets[d].re;
			dens.innerHTML = this.planets[d].dens;
		}
		else {
			planetparent.style.display = "none";
		}
	};
	this.updateSystem = () => {
		angleMode(DEGREES);
		let inde;
		for (let i = 0; i < this.system.length; i++) {
			if (this.planets[i] !== undefined) {
				inde++;
				this.planets[i].deg += this.planets[i].speed;
			}
			translate(0, 0);
			let star = this.system[i];
			let x = cos(star.deg) * star.dist;
			let y = sin(star.deg) * star.dist;

			push();
			noStroke();
			fill(255);
			ellipse(x, y, star.rad, star.rad);
			pop();
			if (star.hasp && started === true) {
				push();
				translate(x, y);
				noStroke();
				fill(0, 93, 255);
				ellipse(cos(this.planets[i].deg) * 1.5, sin(this.planets[i].deg) * 1.5, 0.1, 0.1);
				pop();
			}
		}
		// for (let i = 0; i < this.planets.length; i++) {
		// 	this.planets[i].deg++;
		// 	let star = this.system[this.planets[i].id];

		// 	translate(cos(star.deg) * star.dist, sin(star.deg) * star.dist);
		// 	push();
		// 	// noFill();
		// 	// stroke(255);
		// 	// strokeWeight(0.1);
		// 	noStroke();
		// 	fill(0, 93, 255);
		// 	ellipse(0, 0, 1, 1);
		// 	pop();

		// 	this.planets[i].x = cos(this.planets[i].deg) * 1.5;
		// 	this.planets[i].y = sin(this.planets[i].deg) * 1.5;

		// 	// push();

		// 	// fill(150);
		// 	// noStroke();
		// 	// ellipse(this.planets[i].x, this.planets[i].y, 0.5, 0.5);
		// 	// pop();
		// 	// translate(0, 0);
		// }
	};
}


function Presenter() {
	// this.zoom = 1;
	// this.toggled = false;
	// this.swithState = () => {
	// 	this.zoom = this.toggled ? 0.1 : 1;
	// };

}

// Math.prototype.degrees = function(radians) {
// 	return radians / (Math.PI / 180);
// };

leftnav.addEventListener('click', () => {
	index = index > 0 ? index - 1 : space.system.length - 1;
	space.updateInfo(index);
	space.updatePlanetInfo(index);
	// alert(index);
});

rightnav.addEventListener('click', () => {
	index = index < space.system.length - 1 ? index + 1 : 0;
	space.updateInfo(index);
	space.updatePlanetInfo(index);
});

// document.addEventListener('wheel', e => {
// 	camera.zoom += abs(e.deltaY) / e.deltaY;
// 	// e.preventDefault();
// });

startbtn.addEventListener('click', () => {
	document.getElementById('ui-main').style.display = 'block';
	document.getElementById('start').style.display = 'none';
	document.getElementById('start-btn').style.display = 'none';
	started = true;
})
