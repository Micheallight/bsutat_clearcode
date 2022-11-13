class Plane {
	constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
		this.model = model;
		this.maxSpeed = maxSpeed;
		this.maxFlightDistance = maxFlightDistance;
		this.maxLoadCapacity = maxLoadCapacity;
	}

	get model() {
		return this._model;
	}

	set model(value) {
		this._model = value;
	}

	get maxSpeed() {
		return this._maxSpeed;
	}
	
	set maxSpeed(value) {
		this._maxSpeed = value;
	}

	get maxFlightDistance() {
		return this._maxFlightDistance;
	}
	
	set maxFlightDistance(value) {
		this._maxFlightDistance = value;
	}

	get minLoadCapacity() {
		return this._minLoadCapacity;
	}

	set minLoadCapacity(value) {
		this._minLoadCapacity = value;
	}
}

module.exports = Plane;
