import React, { useEffect } from 'react'
import * as tf from '@tensorflow/tfjs'
import * as posenet from '@tensorflow-models/posenet'
import Webcam from 'react-webcam'
import { useRef } from 'react'
import { drawKeypoints,drawSkeleton } from './Utilities'

const Tensorflow = () => {
    const WebcamRef = useRef(null);
    const CanvasRef = useRef(null);
    let video

// const canvas = document.getElementById("canvas")
async function setupCamera() {
 video = WebcamRef.current.video;

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  return new Promise((resolve) => {
      video.onloadedmetadata = () => {
          resolve(video);
      };
  });
}
    const runPosenet =async ()=>{
      const video = await setupCamera();
      video.play();
      const net = await posenet.load() 
    console.log("dfhdfh")
    detect(net);
  
  }
    //
const detect = async(net)=>{
  if (typeof WebcamRef !== "undefined" && WebcamRef.current!== null && WebcamRef.current.video.readyState === 4){
    // const video = WebcamRef.current.video;
    const videoWidth = WebcamRef.current.video.videoWidth;
    const videoHeight =  WebcamRef.current.video.videoHeight;

    WebcamRef.current.videoWidth = videoWidth;
    WebcamRef.current.videoHeight = videoHeight;

    const pose = await net.estimateSinglePose(video);
  
    console.log(pose)
    draw(pose,video,videoWidth,videoHeight,CanvasRef)

  }
  requestAnimationFrame(()=>{
    detect(net)
  });
}

function drawPose(pose,video,videoWidth,videoHeight,canvas) {
  canvas.current.width = videoWidth;
canvas.current.height = videoHeight;
context.drawImage(video, 0, 0, canvas.current.width, canvas.current.height);
const context = canvas.current.getContext("2d");

  context.clearRect(0, 0, canvas.current.width, canvas.current.height);

  // Draw keypoints
  for (const keypoint of pose.keypoints) {
      const { x, y } = keypoint.position;
      context.beginPath();
      context.arc(x, y, 5, 0, 2 * Math.PI);
      context.fillStyle = 'red';
      context.fill();
  }
}
const draw = (pose,video,videoWidth,videoHeight,canvas)=>{
const ctx = canvas.current.getContext("2d");
canvas.current.width = videoWidth;
canvas.current.height = videoHeight;

drawKeypoints(pose['keypoints'],0.3,ctx);
drawSkeleton(pose['keypoints'],0.3,ctx);
}



useEffect(()=>{
  console.log("first")
  runPosenet()
},[])
  return (
    <div className='flex flex-row w-screen h-screen gap-6 justify-between '>
        <Webcam ref={WebcamRef} className=' mx-auto  '/>
        <canvas ref={CanvasRef} id='canvas' className=' mx-auto  '/>
    </div>
  )
}

export default Tensorflow