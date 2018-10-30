function Round_item(index,x,y) {
	this.index = index;
	this.x = x;
	this.y = y;
	this.r = Math.random() * 2 + 1;
	var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
	this.color = "rgba(255,255,255," + alpha + ")";
}
Round_item.prototype.draw = function () {
	content.fillStyle = this.color;
	content.shadowBlur = this.r * 2;
	content.beginPath();
	content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	content.closePath();
	content.fill();
};
function init() {
	for(var i = 0; i < initRoundPopulation; i++ ){
		round[i] = new Round_item(i,Math.random() * WIDTH,Math.random() * HEIGHT);
		round[i].draw();
	}

}