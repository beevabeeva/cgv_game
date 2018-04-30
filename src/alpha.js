"use strict";


// lives
// rewards
// score
// boosts
// speedY
// speedZ
// speedRotation ???
// position -  x,y,z
// geometry - threejs geometry, may be a model
// material - threejs material, includes shading, may include a texture
// radius of object

class Alpha extends THREE.Mesh{
	
	constructor(geometry, material, radius) {
		
		super(geometry, material);
		
		this.speedY = 0;
		this.speedZ = -0.01;
		this.maxSpeedY = 0.7;
		this.maxSpeedZ = -1;
		this.minSpeedZ = -0.01;
		
		this.lives = STARTING_LIVES; //TODO: make a cat that gives you 9 lives
		this.radius = radius;
		
		this.geometry = geometry;	// save geometry of model so that it can be accessed later by collision fn.
		console.log("Alpha created");
		
	}
	
	resetAttributes(){
		this.speedY = 0;
		this.speedZ = -0.01;
		this.maxSpeedY = 0.7;
		this.maxSpeedZ = -1;
		this.minSpeedZ = -0.01;
		
		console.log("alpha reset");
	}

	getRadius() {
		return this.radius;
	}
	
	setRadius(rad) {
		this.radius = rad;
	}
	
	getSpeedY() {
		return this.speedY;
	}
	
	getSpeedZ() {
		return this.speedZ;
	}
	
	setSpeedY(newSpeedY) {
		if(newSpeedY < this.maxSpeedY) {
			this.speedY = newSpeedY;
		} else {
			this.speedY = this.maxSpeedY;
		}
	}
	
	setSpeedZ(newSpeedZ) {
		if(newSpeedZ > this.maxSpeedZ) {
			this.speedZ = newSpeedZ;
		} else {
			this.speedZ = this.maxSpeedZ;
		}
		if(newSpeedZ > this.minSpeedZ) {
			this.speedZ = this.minSpeedZ;
		}
	}
	
	incSpeedY(incY) {
		this.speedY += incY;
		if(this.speedY > this.maxSpeedY) {
			this.speedY = this.maxSpeedY;
		}
	}
	
	incSpeedZ(incZ) {
		this.speedZ += incZ;
		if(this.speedZ <= this.maxSpeedZ) {
			this.speedZ = this.maxSpeedZ;
		}
		if(this.speedZ >= this.minSpeedZ) {
			this.speedZ = this.minSpeedZ;
		}
	}
	
	
	
}
