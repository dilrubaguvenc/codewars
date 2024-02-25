// Write a function that returns the total surface area and volume of 
// a box as an array: [area, volume]


// my solution

const getSize = (w, h, d) => [
    (w * h + w * d + h * d) * 2,
    w * h * d
];


function getSize(w, h, d){
	var area = (2*d*h) + (2*w*h) + (2*d*w);
	var volume = d*w*h;
  return [area, volume];
}


function getSize(width, height, depth) {
    let volume = width * height * depth;
    let area = 2 * (width * height + height * depth + depth * width);
    return [area, volume];
}