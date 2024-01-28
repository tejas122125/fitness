// // MyP5Component.jsx
// import React, { useEffect } from 'react';

// const Mycomponent = () => {




//     let capture;
//     // p5.js sketch goes here
//     const sketch = (p) => {
//       p.setup = () => {

//         p.createCanvas(200, 200);
//         capture = p.createCapture(p.VIDEO)
//         capture.size(p.width,p.height);
//         capture.hide()

//       };

//       p.draw = () => {
//         p.background(220);
//         p.image(capture,0,0,p.width,p.height)

//       };
//     };
// console.log("monu")
//     // Create a new p5 instance
//     new window.p5(sketch);

//       // video.stop(); // Stop the webcam when the component unmounts
// ; // Empty dependency array ensures the effect runs once on mount

//   return <div id="p5-container">monuy dgubfhdgjfbcuhhgc </div>;
// };

// export default Mycomponent;

import React, { useEffect } from 'react';

let singlepose;
let rightwristX, rightwristY;
let keypoints;
let skeleton;
let color1;
let color2;
let gradientColor;

const Mycomponent = () => {
  const modelloaded = () => {
    console.log("model loaded")
  }

  const receivedPoses = (poses) => {
    if (poses.length > 0) {
      singlepose = poses[0].pose;
      keypoints = poses[0].pose;
      skeleton = poses[0].skeleton;
    }
    rightwristX = singlepose.rightWrist.x;
    rightwristY = singlepose.rightWrist.y;
    // console.log(poses)
    // console.log(noseX)
    // console.log(poses)
    // console.log("here we recived the human points")
  }


  const myRef = React.createRef();

  const Sketch = (p) => {
    let capture;
    let posenet
    p.setup = () => {
      p.createCanvas(900, 600);
      // p.stroke(134,45,1
      color1 = p.color(0, 255,0); // green
      color2 = p.color(255, 0, 0); // red
      capture = p.createCapture(p.VIDEO)
      capture.size(p.width, p.height)
      capture.hide()
      posenet = ml5.poseNet(capture, modelloaded)
      posenet.on('pose', receivedPoses)

    }

    p.draw = () => {
      p.background(255, 0, 0)
      p.image(capture, 0, 0, p.width, p.height)
      p.fill(255, 0, 0)
      if (singlepose) {
        for (let i = 0; i < singlepose.keypoints.length; i++) {
          p.ellipse(singlepose.keypoints[i].position.x, singlepose.keypoints[i].position.y, 10, 10)
        }
      }
      if (skeleton) {
        p.stroke(255, 0, 0)
        for (let j = 0; j < skeleton.length; j++) {
          p.line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
      } 
      
      
      if ( rightwristY<=p.height && rightwristY>=0) {

        p.fill(0,255,0)
        p.ellipse(rightwristX,rightwristY,10,20)
        console.log(rightwristY)
        gradientColor = p.lerpColor(color1, color2, rightwristY/600);
        
        p.fill(255,255,255)
        p.rect(p.width -50,100,200,500);
        p.fill(gradientColor)
        p.rect(p.width -50,rightwristY,200,p.height-rightwristY)
      }
    }
  }

  useEffect(() => {
    const storedValue = localStorage.getItem('count');
    if (storedValue < 1) {
      localStorage.setItem('count', 1);
      const myP5 = new window.p5(Sketch, myRef.current)
    }

  }, [])

  return (
    <div className='h-screen w-screen bg-green-600 flex flex-row items-center justify-center gap-6 p-6' ref={myRef}>
      Hello
    </div>
  )
}

export default Mycomponent;