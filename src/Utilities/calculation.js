export const  CalculateAcuteAngle = (x1, y1, x2, y2, x3, y3) => {
    // Vectors AB and BC
    let AB = { x: Math.abs(x2 - x1), y: Math.abs(y2 - y1) };
    let BC = { x: Math.abs(x3 - x2), y: Math.abs(y3 - y2) };
  
    // Dot product of AB and BC
    let dotProduct = AB.x * BC.x + AB.y * BC.y;
  
    // Magnitude of vectors AB and BC
    let magnitudeAB = Math.sqrt(AB.x * AB.x + AB.y * AB.y);
    let magnitudeBC = Math.sqrt(BC.x * BC.x + BC.y * BC.y);
  
    // Cosine of the angle
    let cosineTheta = dotProduct / (magnitudeAB * magnitudeBC);
  
    // Acute angle in radians
    let thetaRad = Math.acos(cosineTheta);
  
    // Convert radians to degrees
    let thetaDeg = (thetaRad * 180) / Math.PI;
  
    return thetaDeg;
  }
  
