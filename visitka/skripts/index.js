document.getElementById('aboutme').onclick = function (){
    document.getElementById('about__me').scrollIntoView({behavior:'smooth'})
}
document.getElementById('networks').onclick = function (){
    document.getElementById('net').scrollIntoView({behavior:'smooth'})
}
document.getElementById('myskils').onclick = function (){
    document.getElementById('skils').scrollIntoView({behavior:'smooth'})
}


/*console.clear();

class Drop {
	constructor(x, y) {
		console.log(x);
		this.x = x;
		this.y = y;
		this.create();
	}
	
	create() {
		let dropEl = document.createElement('div');
		dropEl.classList.add('drop');
		dropEl.style.left = `${this.x}px`;
		dropEl.style.top = `${this.y}px`;
		document.body.appendChild(dropEl);
	}
}

const createDrop = e => {
	let xPos = e.clientX,
			yPos = e.clientY;
	
	let drop = new Drop(xPos, yPos);
}

document.addEventListener('click', createDrop);
document.addEventListener('DOMContentLoaded', function() {
	new Drop(window.innerWidth/2, window.innerHeight/2);
});*/