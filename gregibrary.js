var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

function rgb(red, green, blue) {
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function rgba(red, green, blue, alpha) {
    return "rgba(" + red + ", "+ green + ", " + blue + ", " + alpha + ")";
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDecimal(min, max) {
    return Math.random() * (max - min) + min
}

function hypotenuse(d1, d2) {
    return Math.sqrt(d1 ** 2 + d2 ** 2)
}

function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawSquare(x, y, width, color) {    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, width);
}

function drawLine(startX, startY, endX, endY, color) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, startY);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawEmptyCircle(x, y, radius, color) {  
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function clearEmptyCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = canvas.style.backgroundColor;
  ctx.stroke();
}

function drawFilledCircle(x, y, radius, color) {  
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

function clearFilledCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = canvas.style.backgroundColor;
  ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function writeText(text, x, y, fontSize, color) {
    ctx.font = fontSize + "px " + "Sans Serif";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

function drawPolygon(x, y, radius, sides, color) {
  // credit goes to gemini here

  // Calculate angle between each corner
  const angle = Math.PI * 2 / sides;

  // Start drawing the polygon
  ctx.beginPath();
  ctx.moveTo(x + radius, y); // Start at a corner (top-right)

  // Loop through all sides, including the first and last corner
  for (let i = 0; i < sides; i++) {
    // Calculate x and y coordinates of the next corner
    const nextX = x + radius * Math.cos(angle * i);
    const nextY = y + radius * Math.sin(angle * i);

    // Draw a line to the next corner
    ctx.lineTo(nextX, nextY);
  }

  // Close the path to create a filled polygon
  ctx.closePath();

  // Set fill style and draw
  ctx.fillStyle = color;
  ctx.fill();
}

function drawTriangle(x, y, side, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + side, y);
    //1.732 is roughly root 3
    ctx.lineTo(x + side / 2, y - 1.732 * side / 2);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function drawHexagon(x, y, side, color) {
    //apothem is side / 2tan(180 / size)
    //for a hexagon that becomes: 
    const apothem = side / 1.154
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + side, y);
    ctx.lineTo(x + side + Math.sqrt((side ** 2) - (apothem ** 2)), y + apothem);
    ctx.lineTo(x + side, y + 2 * apothem);
    ctx.lineTo(x, y + 2* apothem);
    ctx.lineTo(x - Math.sqrt((side ** 2) - (apothem ** 2)), y + apothem);
    ctx.lineTo(x, y); 
    ctx.fillStyle = color;   
    ctx.fill();
}

function drawPointyHexagon(x, y, side, color) {
    //apothem is side / 2tan(180 / size)
    //for a hexagon that becomes: 
    const apothem = side / 1.154
    ctx.beginPath();
    ctx.moveTo(x, y);    
    ctx.lineTo(x + apothem, y + Math.sqrt(side ** 2 - apothem ** 2));
    ctx.lineTo(x + apothem, y + Math.sqrt(side ** 2 - apothem ** 2) + side);
    ctx.lineTo(x, y + side + 2 * Math.sqrt(side ** 2 - apothem ** 2));
    ctx.lineTo(x - apothem, y + Math.sqrt(side ** 2 - apothem ** 2) + side);
    ctx.lineTo(x - apothem, y + Math.sqrt(side ** 2 - apothem ** 2));
    ctx.lineTo(x, y)
    ctx.fillStyle = color;   
    ctx.fill();
}

function moveImage(x, y, id) {
    // moves an <img> element instead of actually rendering it on canvas, lmfao(works though)    
    const img = document.getElementById(id)
    //assuming the canvas is in the center because the code for supporting other places didnt work
    const canvasX = window.innerWidth / 2
    const canvasY = window.innerHeight / 2
    img.style.position = 'absolute'
    img.style.left = canvasX + x - canvas.width / 2 + 'px'
    img.style.top = canvasY + y - canvas.height / 2 + 'px'
}

function average(num1, num2) {
    (num1 + num2) / 2
}