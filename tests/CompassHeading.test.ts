import { calculateCompassHeading } from "../src/CompassHeading";

// Test suite for the calculateCompassHeading function
describe("calculateCompassHeading", () => {
  // Test case: returns 0 if alpha, beta, and gamma are all 0
  it("returns 0 if alpha, beta, and gamma are all 0", () => {
    const result = calculateCompassHeading(0, 0, 0);
    expect(result).toBe(0);
  });

  // Test case: calculates the compass heading when alpha, beta, and gamma are non-zero
  it("calculates the compass heading when alpha, beta, and gamma are non-zero", () => {
    const alpha = 45;
    const beta = 30;
    const gamma = 60;

    const result = calculateCompassHeading(alpha, beta, gamma);
    expect(result).toBeCloseTo(260.76847951640775, 2);
  });

  // Test case: calculates the compass heading when alpha is 0
  it("calculates the compass heading when alpha is 0", () => {
    const alpha = 0;
    const beta = 30;
    const gamma = 60;

    const result = calculateCompassHeading(alpha, beta, gamma);
    expect(result).toBeCloseTo(210.00000000000003, 2);
  });

  // Test case: calculates the compass heading when beta is 0
  it("calculates the compass heading when beta is 0", () => {
    const alpha = 45;
    const beta = 0;
    const gamma = 60;

    const result = calculateCompassHeading(alpha, beta, gamma);
    expect(result).toBeCloseTo(300, 2);
  });

  // Test case: calculates the compass heading when gamma is 0
  it("calculates the compass heading when gamma is 0", () => {
    const alpha = 45;
    const beta = 30;
    const gamma = 0;

    const result = calculateCompassHeading(alpha, beta, gamma);
    expect(result).toBeCloseTo(320.76847951640775, 2);
  });
});
