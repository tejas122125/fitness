// // 1. Install dependencies DONE
// // 2. Import dependencies DONE
// // 3. Setup webcam and canvas DONE
// // 4. Define references to those DONE
// // 5. Load posenet DONE
// // 6. Detect function DONE
// // 7. Drawing utilities from tensorflow DONE
// // 8. Draw functions DONE

// import React, { useEffect, useRef } from "react";

// import * as tf from "@tensorflow/tfjs";
// import * as posenet from "@tensorflow-models/posenet";
// import Webcam from "react-webcam";
// import { drawKeypoints, drawSkeleton } from "./Utilities";

// function Testing() {
//     let net = null
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   //  Load posenet
//   const runPosenet = async () => {
//      net = await posenet.load({
//          architecture: 'ResNet50',
//       inputResolution: { width: 640, height: 480 },
//       scale: 0.8,
//     });
//     //
//     console.log("first")
// detect(net)
//   };

//   const detect = async (net) => {
//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       // Get Video Properties
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       // Set video width
//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;
// console.log("efdffff")
//       // Make Detections
//       const pose = await net.estimateSinglePose(video);
//       console.log(pose);

//       drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
//     }

//     requestAnimationFrame(()=>{detect(net)})
//   };

//   const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
//     const ctx = canvas.current.getContext("2d");
//     canvas.current.width = videoWidth;
//     canvas.current.height = videoHeight;

//     drawKeypoints(pose["keypoints"], 0.6, ctx);
//     drawSkeleton(pose["keypoints"], 0.7, ctx);
//   };

// useEffect(()=>{
//     runPosenet()
// },[])

//   return (
//     <div className="App">
    
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//     </div>
//   );
// }

// export default Testing;