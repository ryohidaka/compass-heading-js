/**
 * Calculates the compass heading in degrees based on alpha, beta, and gamma values.
 *
 * @param alpha - The alpha value representing the device's compass heading.
 * @param beta - The beta value representing the device's tilt front-to-back.
 * @param gamma - The gamma value representing the device's tilt left-to-right.
 * @returns The compass heading in degrees.
 */
export const calculateCompassHeading = (
  alpha: number,
  beta: number,
  gamma: number,
): number => {
  if (!alpha && !beta && !gamma) {
    return 0; // No meaningful values to calculate heading
  }

  const betaRad = degreesToRadians(beta);
  const gammaRad = degreesToRadians(gamma);
  const alphaRad = degreesToRadians(alpha);

  const cosBeta = Math.cos(betaRad);
  const cosGamma = Math.cos(gammaRad);
  const sinBeta = Math.sin(betaRad);
  const sinGamma = Math.sin(gammaRad);
  const sinAlpha = Math.sin(alphaRad);

  // Calculate Vx and Vy components
  const Vx = -cosGamma * sinBeta - sinGamma * sinAlpha * cosBeta;
  const Vy = -sinGamma * sinBeta + cosGamma * sinAlpha * cosBeta;

  // Calculate compass heading
  let compassHeading = Math.atan(Vx / Vy);

  // Convert compass heading to use the whole unit circle
  if (Vy < 0) {
    compassHeading += Math.PI;
  } else if (Vx < 0) {
    compassHeading += 2 * Math.PI;
  }

  return compassHeading * (180 / Math.PI); // Compass Heading (in degrees)
};

/**
 * Converts degrees to radians.
 *
 * @param degrees - The angle in degrees.
 * @returns The angle in radians.
 */
const degreesToRadians = (degrees: number): number => degrees * (Math.PI / 180);
