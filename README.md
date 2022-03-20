# Apple-AirPod-Pro-Rebuild
![airpods-build-sc1](https://user-images.githubusercontent.com/89874146/159143579-85eb57bb-d92b-41e9-a8be-99f20885cd94.png)

## Summary 
This is a partial rebuild of Apple's AirPods Pro landing page. The main focus here is dealing with HTML5 canvas in order to sequence, display and transition image files. This page displays a perceived "shifting light effect" for image transitioning. While this is not a full website rebuild, the final product serves as great practice with the HTML canvas and developing UI-enhancing animations and transitions. No complex WebGL scenes or advanced JavaScript libraries, written in Vanilla JavaScript. Pull Requests welcomed!

## Live Site
https://nickmezacapa.github.io/Apple-AirPod-Pro-Rebuild/

## Codepen Demo
https://codepen.io/nickmezacapa/pen/jOYEoVb

## Task 
Build a landing page that makes use of html canvas to sequence, display and transition image files from a common directory. Use the features of canvas to develop intuitive, interactive, and UI-enhancing designs. Create AirPods animation just like a sequence of images in rapid succession with smooth transitions.

## Criteria 
- Responsiveness amongst browser platforms.
- Responsiveness amongst different devices.
- UI layout is similar to, or clones that of something Apple would develop.
- Image loading times are quick enough to not diminish user interface or experience.
- Images are loaded in relation to user's scroll position on page.  
- No plugins or frameworks. Strictly Vanilla JavaScript.
- Use of HTML canvas

## Summary of Tech Stack
No fancy frameworks or plugins are needed to reproduce these effects. The magic happens inside the HTML canvas element which is controlled with Vanilla JavaScript. By using Vanilla JavaScript, we can manipulate canvas dimensions, create and load and draw images to the canvas, and access a public directory of image files. How we manipulate the canvas will provide the sleek animation we are looking for. By synchronizing each image frame to the user's scroll position, we can play the animation as the user scrolls down or up the webpage. As the user scrolls, the canvas will display the image frame that corresponds to their scroll position.

## Functionality 
As the user scrolls the page, scroll position will be interpolated to a scroll percentage which will represent the progress. The scroll percentage/progress will be relavant to a respective image frame. With each update in scroll progress, a new image will be drawn to the canvas. Transitions will be seamless. The user can scroll up or down the page and the correct image will always display.

## Explanation
The basic concept resembles that of a flip book. A sequence of images are rendered in rapid succession per the user's scroll position to perceive a fluid animation. As for the HTML and CSS, we need to make sure we have a canvas element to render images to, and we need our body to be at least 500vh height to give enough space to scroll. 

After selecting and declaring our variables that we'll need, a good place to start is writing a function that returns the file path with the number of the image file we want.
```
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)
```
Since the image number is an integer, we need to turn it into a string and use padStart(4, '0') to prepend zeros in front of our index until we reach four digits to match the file names. For example, passing 1 into this function will return 0001.

Next we need to create a way to update each image with an image that corresponds to the user's scroll position. 
We can make an event listener to track scrolling and handle some math to calculate which image to load.
We need to know:
- Where scrolling starts and ends
- The user's scroll progress
- Image that corresponds to scroll progress
```
window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;                                           // vertical scroll position
  const maxScrollTop = (html.scrollHeight - window.innerHeight);             // maximum scroll value
  const scrollFraction = scrollTop / maxScrollTop;                          // gives user scroll progress as %
```
Then we need to turn that scroll progress into an index number that corresponds with the image numbering sequence for us to return the correct image for that position. We can do this by multiplying the progress number by the number of frames (images) we have. We’ll use `Math.floor()` to round that number down and wrap it in `Math.min()` with our maximum frame count so it never exceeds the total number of frames.

Lastly, we need to render the correct image to the canvas according to the scroll position. To do so, we use the magic of `canvas` and `requestAnimationFrame()`. We will write a function that will update the image source and drae the new image on the `canvas`.
```
requestAnimationFrame(() => updateImage(frameIndex +1))
```
We increase the frame index by 1 because, while the image sequence starts at 0001.jpg, our scroll progress calculation actually starts at 0. This ensures that the two values are always aligned.

The callback function we pass to update the image:
```
const updateImage = index => {
img.src = currentFrame(index);
context.drawImage(img, 0, 0);
```
We pass the frameIndex into the function. That sets the image source with the next image in the sequence which is drawn to the `canvas`.

## Run Locally:
1. Run this command: `git clone https://github.com/NickMezacapa/Apple-AirPod-Pro-Rebuild.git`
2. Run `npm install`
3. Double check your ports to avoid errors
4. Run `npm run start-dev`
5. You are now in the dev environment and you can play around

## Test Scenarios
- On page load, hero images are not preloaded to screen, yet transition in.
- The first hero image displayed corresponds to the first image frame in the directory.
- After the AirPods headline showcase is scrolled off the page, hero image opacity increases to full.
- The navbar position remains fixed regardless of scroll progress.
- Navbar buttons contain a hover effect.
- The user is able to scroll up or down the page and the canvas will always display the correct corresponding image frame. Progress is never lost.
- Frame transitions are quick and seamless.

## Screenshots
![airpods-build-sc1](https://user-images.githubusercontent.com/89874146/158286810-0a7088af-4f3d-480b-a3cf-4a29831cf9f1.png)
![airpods-build-sc2](https://user-images.githubusercontent.com/89874146/158286817-a9afd9bc-99e8-4346-9ba3-8c0ea7bdb7e0.png)
![airpods-build-sc3](https://user-images.githubusercontent.com/89874146/158286823-7ecd165f-fc2d-4a4d-bab6-0a0d762d2db7.png)

## Helpful Links
1. https://airbnb.design/introducing-lottie/
2. https://www.tutorialspoint.com/html5/html5_canvas.htm
3. http://techslides.com/image-transition-effects-with-canvas

## Original Site
- https://www.apple.com/airpods-pro/
- All hero images are not owned by me. Let credit be to Apple for this cool design concept. Page was created as a learning experience and to showcase my skills, no intent to commercialize. 
