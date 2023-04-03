// Code your solution in this file!
const feetPerBlock = 264;
function distanceFromHqInBlocks(someValue) {
   if (someValue < 42) {
      return 42 - someValue;
   } else if (someValue > 42) {
      return someValue - 42;
   }
}

function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination) {
   if (start < destination) {
      return (destination - start) * feetPerBlock
   } else if (start > destination) {
      return (start - destination) * feetPerBlock
   }
}
function calculatesFarePrice(start, destination) {
   let charges = 0;
   if (distanceTravelledInFeet(start, destination) <= 400) {
      charges = 0;
   } else if (distanceTravelledInFeet(start, destination) < 2000) {
      charges = 0.02 * (distanceTravelledInFeet(start, destination) - 400);
   } else if (distanceTravelledInFeet(start, destination) >= 2000 &&
      distanceTravelledInFeet(start, destination) <= 2500) {
      charges = 25;
   }
   else {
      charges = 'cannot travel that far';
   }
   return charges
}


// console.log(calculatesFarePrice(55, 58))