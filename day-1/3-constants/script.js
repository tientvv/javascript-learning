const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt('Enter the radius of a circle');

document.getElementById('mySubmit').onclick = function () {
  radius = document.getElementById('myText').value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById('myH1').textContent = `Enter the radius of a circle: ${circumference}`;
};

console.log(circumference);
