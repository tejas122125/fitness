// import React, { useEffect } from 'react'
// import {
//     PoseLandmarker,
//     FilesetResolver,
//     DrawingUtils
// } from "https://cdn.skypack.dev/@mediapipe/tasks-vision@0.10.0";
// let poseLandmarker = undefined;
// let runningMode = "IMAGE";
// let enableWebcamButton;
// let webcamRunning = false;
// const videoHeight = "360px";
// const videoWidth = "480px";
// let canvasCtx;
// let drawingUtils;
// const Google = () => {
//     const createPoseLandmarker = async () => {
//         const vision = await FilesetResolver.forVisionTasks(
//             "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
//         );
//         poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
//             baseOptions: {
//                 modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
//                 delegate: "GPU"
//             },
//             runningMode: runningMode,
//             numPoses: 2
//         });
//             const video = document.getElementById("webcam")
//     const canvasElement = document.getElementById("output_canvas")
//      canvasCtx = canvasElement.getContext("2d");
//      drawingUtils = new DrawingUtils(canvasCtx);
//      const hasGetUserMedia = () => navigator.mediaDevices.getUserMedia;
//     if (hasGetUserMedia()) {
//        console.log("user got camera")
//     } else {
//         console.warn("getUserMedia() is not supported by your browser");
//     }
//     // getUsermedia parameters.
//     const constraints = {
//         video: true
//     };

//     // Activate the webcam stream.
//     navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//         video.srcObject = stream;
//         video.addEventListener("loadeddata", predictWebcam);
//     });
//     predictWebcam();
//     };





//     useEffect(() => { createPoseLandmarker }, []);








// let lastVideoTime = -1;
// async function predictWebcam() {
//   canvasElement.style.height = videoHeight;
//   video.style.height = videoHeight;
//   canvasElement.style.width = videoWidth;
//   video.style.width = videoWidth;
//   // Now let's start detecting the stream.
//   if (runningMode === "IMAGE") {
//     runningMode = "VIDEO";
//     await poseLandmarker.setOptions({ runningMode: "VIDEO" });
//   }
//   let startTimeMs = performance.now();
//   if (lastVideoTime !== video.currentTime) {
//     lastVideoTime = video.currentTime;
//     poseLandmarker.detectForVideo(video, startTimeMs, (result) => {
//       canvasCtx.save();
//       canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//       for (const landmark of result.landmarks) {
//         drawingUtils.drawLandmarks(landmark, {
//           radius: (data) => DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1)
//         });
//         drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
//       }
//       canvasCtx.restore();
//     });
//   }

//   // Call this function again to keep predicting when the browser is ready.
//     requestAnimationFrame(predictWebcam);
// }


// return (
//      <div className='relative'>rtrtgrtgtg
//     <video id="webcam" width="640" height="480" autoPlay playsInline></video>
//     <canvas  width="640" height="480"  id="output_canvas"></canvas>
//   </div>
// )
// }

// export default Google


// import React from 'react'

// const Google = () => {
//   return (

//     <div  className='relative flex h-[1500px] w-screen flex-col gap-6 justify-between items-center'>
//       <video id="webcam" className="w-[1280px] h-[720px] border-4 border-green-600" autoPlay playsInline/>
//       <canvas  id="output_canvas" className="w-[1280px] h-[720px]  border-4 border-green-600"/>
//     </div>
//   )
// }

// export default Google