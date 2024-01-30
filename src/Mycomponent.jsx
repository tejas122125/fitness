
import React from 'react'
import { useEffect } from 'react'
import { CalculateAcuteAngle } from './Utilities/calculation';

const Mycomponent = () => {
  let rightWristAvgX = 0;
  let rightWristAvgY = 0;
  let img;
  let tempx = 0, tempy = 0;
  let singlepose, smoothedPoses;
  let rightwristX, rightwristY, rightElbowX, rightElbowY, rightShoulderX, rightShoulderY, right_angle;
  let keypoints;
  let skeleton;
  let color1;
  let color2;
  let gradientColor;


  const modelloaded = () => {
    console.log("model loaded")
  }

  const myRef = React.createRef();

  const Sketch = (p) => {
    let capture;
    let posenet
    p.setup = () => {
      p.createCanvas(900, 600);
      img = p.loadImage('../public/A.png')

      color1 = p.color(0, 255, 0); // green
      color2 = p.color(255, 0, 0); // red
      capture = p.createCapture(p.VIDEO)
      capture.size(p.width, p.height)
      capture.hide()
      // capture.scale(-1,1);

      posenet = ml5.poseNet(capture, {
        imageScaleFactor: 0.9,
        minConfidence: 0.5,
      }, modelloaded)
      posenet.on('pose', receivedPoses)

    }
    p.draw = () => {
      p.translate(p.width, 0);
      p.scale(-1, 1);
      p.background(255, 0, 0)
      p.image(capture, 0, 0, p.width, p.height)
      p.scale(-1, 1)

      p.fill(255, 0, 0)
      p.ellipse(0, 0, 20, 20)
      p.image(img, -400, 50)


      if (singlepose) {

        for (let i = 0; i < singlepose.keypoints.length; i++) {
          // console.log("nfbhfb",singlepose.pose.keypoints)
          p.ellipse(-singlepose.keypoints[i].position.x, singlepose.keypoints[i].position.y, 10, 10)
        }
      }
      if (skeleton) {
        // console.log("first")
        p.stroke(255, 0, 0)
        for (let j = 0; j < skeleton.length; j++) {
          p.line(-skeleton[j][0].position.x, skeleton[j][0].position.y, -skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
      }


      if (rightwristY <= p.height && rightwristY >= 0) {
        console.log("hhj",right_angle)
        p.fill(0, 255, 0)
        p.ellipse(-rightwristX, rightwristY, 10, 20)
        // console.log(rightwristY)
        // console.log("avg",rightWristAvgY)

        gradientColor = p.lerpColor(color1, color2, rightwristY / 600);

        p.fill(255, 255, 255)
        p.rect(p.width - 50, 100, 200, 500);
        p.fill(gradientColor)
        p.rect(p.width - 50, rightwristY, 200, p.height - rightwristY)
      }
    }
    const receivedPoses = (poses) => {
      if (poses.length > 0) {
        singlepose = poses[0].pose;
        keypoints = poses[0].pose;
        skeleton = poses[0].skeleton;
        // console.log(poses)
        rightwristX = singlepose.rightWrist.x;
        rightwristY = singlepose.rightWrist.y;

        rightElbowX = singlepose.rightElbow.x;
        rightElbowY = singlepose.rightElbow.y;

        rightShoulderX = singlepose.rightShoulder.x;
        rightShoulderY = singlepose.rightShoulder.x

        right_angle = CalculateAcuteAngle(rightwristX,
          rightwristY,
          rightElbowX, rightElbowY, rightShoulderX, rightShoulderY
        )
       

      }
    }
  }

    useEffect(() => {
      console.log("hjkhjkh")
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