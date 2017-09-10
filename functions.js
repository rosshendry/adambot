module.exports = {
	rng: function(min, max){
		return Math.floor(Math.random() * max) + min;
	}
}