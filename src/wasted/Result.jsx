// // failed





// import React, { useEffect,useRef } from 'react'
// import {
//     PoseLandmarker,
//     FilesetResolver,
//     DrawingUtils
//   } from '@mediapipe/tasks-vision'
// const videoWidth = 480;
// const Result = () => {
//     let video =null;
// const videoRef = useRef();
// const canvasRef = useRef();
// let results
// let  poseLandmarker;
// let lastVideoTime = -1;
// let canvasElement 
// const setup = async()=>{
//     let vision;
//     canvasElement = document.getElementById("output_canvas")
//    video = document.getElementById("video")
//    try{
//     vision = await FilesetResolver.forVisionTasks(
//     "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
//      );
//    }
//    catch(err){
//     console.log(err)
//    }
//    try{
//      poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath:"../pose_landmarker_lite.task",
//           delegate: "GPU"
//         },
//         minPoseDetectionConfidence: 0.3,
//         minPosePresenceConfidence:0.3,
//         minTrackingConfidence: 0.3,
//         runningMode: "VIDEO",
//         numPoses: 2
//       })}
//       catch(err){
//         console.log(err)
//       }
//            try {
//              const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//              videoRef.current.srcObject = stream;
//            } catch (error) {
//              console.error('Error accessing webcam:', error);
//            }
//    videoRef.current.addEventListener('loadeddata',predict)
// // })
// }

// useEffect(()=>{
//     setup()
// },[])

// const predict = ()=>{
//     console.log('fddjfkuhdufh')

    
//     const radio = video.videoHeight / video.videoWidth;
//   console.log(radio)
//     video.style.width = videoWidth + "px";
//   video.style.height = videoWidth * radio + "px";
//   canvasElement.style.width = videoWidth + "px";
//   canvasElement.style.height = videoWidth * radio + "px";
//   canvasElement.width = video.videoWidth;
//   canvasElement.height = video.videoHeight;

//   let startTimeMs = performance.now();
//   if (lastVideoTime !== video.currentTime) {

// console.log(video)
//   results = poseLandmarker.detectForVideo(video,startTimeMs);
//   lastVideoTime = video.currentTime;
//   console.log("first")
// console.log(results)
//   }





//   const canvas = canvasRef.current;
//       const context = canvas.getContext('2d');
    
//       context.clearRect(0, 0, canvas.width, canvas.height);
//     //   const ctx = canvas.getContext("2d");
//   const drawingUtils = new DrawingUtils(context);
//   for (const landmark of results.landmarks) {
//     console.log(landmark)
//     drawingUtils.drawLandmarks(landmark, {
//       radius: (data) => DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1)
//     });
//     drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
//   }

// }
//   return (
//     <div>
//     <video id="video" ref={videoRef} width="640" height="480" autoPlay playsInline muted />
//     <canvas id = "output_canvas" ref={canvasRef} width="640" height="480" />    </div>
//   )
// }

// export default Result