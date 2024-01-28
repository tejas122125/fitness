
// import React, { useEffect,useRef } from 'react'
// import {
//     PoseLandmarker,
//     FilesetResolver,
//     DrawingUtils
//   } from '@mediapipe/tasks-vision'
// const videoWidth = 480;
// function Lasttry() {
// let video ;
// const videoRef = useRef();
// const canvasRef = useRef();
// let results
// let  poseLandmarker;
// let lastVideoTime = -1;
// let canvasElement
// const setup = async()=>{
//      canvasElement = document.getElementById(
//         "output_canvas"
//       )
//     video = document.getElementById("video")
//     const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
//       );

//        poseLandmarker = await PoseLandmarker.createFromOptions(
//         vision,
//         {
//             baseOptions: {
//                 modelAssetPath:'../pose_landmarker_lite.task',
//                 delegate: "GPU"
//               },
//               numPoses: 2,
//           runningMode: "VIDEO"
//         });
//         // console.log(faceLandmarker)
//             try {
//               const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//               videoRef.current.srcObject = stream;
//             } catch (error) {
//               console.error('Error accessing webcam:', error);
//             }
      
// //  video   = document.getElementById('video')
// // // console.log(video)
// // navigator.mediaDevices.getUserMedia({video:true,audio:true})
// // .then((stream)=>{
// //     console.log("nvifinv")
// //     video.srcobject = stream;
// //     console.log("fvfygv")
// //     predict()
//     videoRef.current.addEventListener('loadeddata',predict)
// // })
// }
// useEffect(()=>{
//     setup()
// },[])

// const predict = ()=>{
//     const radio = video.videoHeight / video.videoWidth;
//   video.style.width = videoWidth + "px";
//   video.style.height = videoWidth * radio + "px";
//   canvasElement.style.width = videoWidth + "px";
//   canvasElement.style.height = videoWidth * radio + "px";
//   canvasElement.width = video.videoWidth;
//   canvasElement.height = video.videoHeight;
//     // console.log("monu")
    
//     // const nowims = Date.now;
//     // if(lastVideoTime != videoRef.current.currentTime){
//     //     lastVideoTime = videoRef.current.currentTime;
//     //     const result  = faceLandmarker.detectForVideo(videoRef.current)
//     //     console.log(result);
//     // }
//     // 
//     let startTimeMs = performance.now();
//     if (lastVideoTime !== video.currentTime) {
//       lastVideoTime = video.currentTime;
//     results = poseLandmarker.detectForVideo(video, startTimeMs);
//       console.log(results)
//     }
//     const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         context.clearRect(0, 0, canvas.width, canvas.height);
// // console.log("vfv")
//         // if (results.faceLandmarks) {
//         //     // console.log('cgcydcg')
//         //   const landmarks = results.faceLandmarks;
//         //   mp.drawConnectors(context, landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, {
//         //     color: '#00F',
//         //     lineWidth: 1,
//         //   });
//         //   mp.drawConnectors(context, landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, {
//         //     color: '#00F',
//         //     lineWidth: 1,
//         //   });
//         //   mp.drawConnectors(context, landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, {
//         //     color: '#00F',
//         //     lineWidth: 1,
//         //   });
//         //   mp.drawConnectors(context, landmarks, FaceLandmarker.FACE_LANDMARKS_OVAL, {
//         //     color: '#00F',
//         //     lineWidth: 1,
//         //   });
//         //   mp.drawConnectors(context, landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, {
//         //     color: '#00F',
//         //     lineWidth: 1,
//         //   });
//         // }
//         const ctx = canvas.getContext("2d");
//   const drawingUtils = new DrawingUtils(ctx);
//   for (const landmarks of results.faceLandmarks) {
//     console.log(landmarks)
//   }
//     requestAnimationFrame(predict)
// }

//   return (
//     <div>
//        <video id="video" ref={videoRef} width="640" height="480" autoPlay playsInline muted />
//        <canvas id = "output_canvas" ref={canvasRef} width="640" height="480" />    </div>
//   )
// }




// export default Lasttry