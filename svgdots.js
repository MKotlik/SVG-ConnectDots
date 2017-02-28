var mySVG = document.getElementById("picasso");
var clear = document.getElementById("clear");
var prevX = -1;
var prevY = -1;

/*myCanvas.onmousedown = function(e){
	ctx.fillStyle = "#ff00ff";
	ctx.fillRect(e.clientX,e.clientY,50,50);
};*/

clear.onclick = function(){
	ctx.beginPath();
	ctx.clearRect(0,0,400,400);
}

mySVG.onmousedown = function(e){
	if (prevX != -1) {
		var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
		newLine.setAttribute("x1", prevX);
		newLine.setAttribute("y1", prevY);
		newLine.setAttribute("x2", e.offsetX);
		newLine.setAttribute("y2", e.offsetY);
		newLine.setAttribute("stroke", "black");
		mySVG.appendChild(newLine);
	}
	var newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	newCircle.setAttribute("cx", e.offsetX);
	newCircle.setAttribute("cy", e.offsetY);
	newCircle.setAttribute("r", 30);
	newCircle.setAttribute("fill", "#ff00ff");
	mySVG.appendChild(newCircle);
	prevX = e.offsetX;
	prevY = e.offsetY;
}
