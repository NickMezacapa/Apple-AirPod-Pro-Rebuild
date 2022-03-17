# Apple-AirPod-Pro-Rebuild
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
