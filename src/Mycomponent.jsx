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
let rightWristAvgX=0;
let rightWristAvgY=0;
let count=1;
let tempx=0,tempy=0;
let singlepose,smoothedPoses;
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

 

  const myRef = React.createRef();

  const Sketch = (p) => {
    let capture;
    let posenet
    p.setup = () => {
      p.createCanvas(900, 600);
      // p.stroke(134,45,1)
      color1 = p.color(0, 255,0); // green
      color2 = p.color(255, 0, 0); // red
      capture = p.createCapture(p.VIDEO)
      capture.size(p.width, p.height)
      // capture.style('transform', 'scaleX(-1)');

      capture.hide()

      posenet = ml5.poseNet(capture,{ imageScaleFactor: 0.9,
        minConfidence: 0.5  ,}, modelloaded)
      posenet.on('pose', receivedPoses)

    }

    p.draw = () => {
      p.background(255, 0, 0)
      p.image(capture,0, 0, p.width, p.height)

      p.fill(255, 0, 0)

      p.ellipse(0,0,20,20)
      // if (smoothedPoses) {
      //   console.log("huhuh",smoothedPoses[0].pose)
      //   for (let i = 0; i < smoothedPoses[0].pose.keypoints.length; i++) {
      //     // console.log("nfbhfb",singlepose.pose.keypoints)
      //     p.ellipse(smoothedPoses.keypoints[i].position.x, smoothedPoses.keypoints[i].position.y, 10, 10)
      //   }
      // }

      if (singlepose) {
        // console.log(singlepose)
        for (let i = 0; i < singlepose.keypoints.length; i++) {
          // console.log("nfbhfb",singlepose.pose.keypoints)
          p.ellipse(singlepose.keypoints[i].position.x, singlepose.keypoints[i].position.y, 10, 10)
        }
      }
      if (skeleton) {
// console.log("first")
        p.stroke(255, 0, 0)
        for (let j = 0; j < skeleton.length; j++) {
          p.line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
      } 
      
      
      if ( rightwristY<=p.height && rightwristY>=0) {

        p.fill(0,255,0)
        p.ellipse( rightwristX, rightwristY,10,20)
        console.log(rightwristY)
        console.log("avg",rightWristAvgY)

        gradientColor = p.lerpColor(color1, color2, rightwristY/600);
        
        p.fill(255,255,255)
        p.rect(p.width -50,100,200,500);
        p.fill(gradientColor)
        p.rect(p.width-50,rightwristY,200,p.height-rightwristY)
      }
    }

    function smoothPoses(newPoses, smoothingFactor) {
      let smoothedPoses = [];
   
        let newPose = newPoses[0].pose;
        let smoothedPose = { keypoints: [] };
          // console.log(newPose);
        for (let j = 0; j < newPose.keypoints.length; j++) {
      
          let newKeypoint = newPose.keypoints[j];
          let smoothedKeypoint = {
            position: {x:0,y:0},
            score: newKeypoint.score,
            part: newKeypoint.part
          };
    
         
          smoothedKeypoint.position.x = p.lerp(smoothedKeypoint.position.x, newKeypoint.position.x, smoothingFactor);
          smoothedKeypoint.position.y = p.lerp(smoothedKeypoint.position.y, newKeypoint.position.y, smoothingFactor);
    
          smoothedPose.keypoints.push(smoothedKeypoint);
        }
    
        smoothedPoses.push({ pose: smoothedPose });
      
    
      return smoothedPoses;
    }

    const receivedPoses = (poses) => {
      if (poses.length > 0) {
        singlepose = poses[0].pose;
        keypoints = poses[0].pose;
        skeleton = poses[0].skeleton;
      
        rightwristX = singlepose.rightWrist.x;
        rightwristY = singlepose.rightWrist.y;
       // console.log(poses)
       // smoothedPoses = smoothPoses(poses, 0.5);
       // console.log(smoothedPoses)
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