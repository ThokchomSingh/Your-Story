let currentSlide = 0; 
let totalSlides = 3; 
let x = 50;
let y = 50;
let keyToPress =' ';



function setup() {
  createCanvas(1280, 700);
 
}



function draw() {
  background(0);
  
  //draw the current slide
  textSize(32); // for the day
  fill(100);
  text("Day:" + currentSlide, 640, 360); 
  
  textSize(32); // for the text
  fill(100);
  text("I am here right now ", x, y);
  
  
  x +=2;
  
  if(x > width) {
    x=0;
  }
  
  
  
  
   
  
  
}
  
function mousePressed() {
  currentSlide++;
  
  if (currentSlide>= totalSlides) {
    currentSlide = 0;
  }
}
  
  
function keyPressed() {
  if (key == keyToPress) { // if the specified key is pressed, jump to the next slide
    currentSlide++; // increment the current slide number
    
    if (currentSlide >= totalSlides) { // if we've reached the end, go back to the beginning
      currentSlide = 0;
    }
  }
}
 
function changeImage() {
    var image = document.getElementById('Mystery');
    if (image.src.match('https://www.nawpic.com/media/2020/cool-4k-nawpic.webp')) {
    image.src = 'https://wallpapercave.com/wp/wp4676584.jpg';
} else {
        image.src = 'https://www.nawpic.com/media/2020/cool-4k-nawpic.webp';
    }   
    
}














