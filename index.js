// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start - finish) * 264;
}

function calculatesFarePrice(start, finish) {
  let distance = distanceTravelledInFeet(start, finish);
  if (distance <= 400) {
    return 0
  } else if (distance <= 2000) {
    return ((distance - 400) * 0.02)
  } else if (distance <= 2500) {
    return 25
  } else (distance < 2501) 
    return `cannot travel that far`
}