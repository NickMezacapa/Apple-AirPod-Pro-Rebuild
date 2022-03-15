// Get control of needed elements and save to variables
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

/* 
We're working with an image sequence, so we will assume the file names are numbered sequentially in ascending order in the same directory. There are 148 separate images that we'll be working with, so that means our frame count will be 148.
We will write a function that returns the file path with the number of the image file we want based on user scroll position.
*/
const frameCount = 148;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)
/* 
Since the image number is an integer, we need to turn it into a string and use padStart(4, '0') to prepend zeros in front of our index until we reach four digits to match the file names. For example, passing 1 into this function will return 0001.
*/

/* 
We need to update canvas image based on user scroll position. We need to track user scroll position, determine corresponding image frame for that position, then draw and update images to the canvas.
We will calculate user scroll progress by making an event listener to track scroll movement and interpolate data to a percentage of how far user is scrolled down the page.
*/
window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop; // vertical scroll position
  const maxScrollTop = (html.scrollHeight - window.innerHeight); // maximum scroll value
  const scrollFraction = scrollTop / maxScrollTop; // gives user scroll progress as %
/* 
Next we need to turn scroll progress into an index number that corresponds with image numbering sequence for us to return the correct image for that position. We can do this by multiplying the progress number by the number of frames. Using Math.floor() to round that number down and then wrap it in Math.min() with our maximum frame count so it never exceeds the total # of frames. 
*/ 
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
// We will use requestAnimationFrame() to update canvas with correct image
// Will pass a function as a callback that will update the image source and draw new image
  requestAnimationFrame(() => updateImage(frameIndex + 1));
/* 
We are increasing frame index by 1 because, while image sequence starts at 0001.jpg, our scroll progress calculation starts at 0. This ensures that the two values are always aligned.
*/
});

// Create, load and draw the image 
const img = new Image();
img.src = currentFrame(1);
// Set canvas dimensions
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

/*
Create the updateImage function. 
We pass the frameIndex into the function. This will set the image source with the next image in the sequence, which is drawn to the canvas element.
*/
const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

/* 
Scrolling quickly may cause lag between image frames. We want a smooth, seamless transition between frames. We will create a function to preload the image's new network requests, ensuring each frame is already downloaded. Doing so should result in transitions that are much quicker and an animation that is much smoother.
To do so, we will loop through the entire sequence of images and load them.
*/
const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };
preloadImages();
