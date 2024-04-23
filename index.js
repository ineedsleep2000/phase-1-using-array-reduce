const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let batteries = batteryBatches.split;
// console.log(batteries);

// function reducer(totalBatteries) {
//   let totalBatteries = batteries;
//   return totalBatteries;
// }

// reducer();

// const totalBatteries = batteryBatches.reduce;
// console.log(totalBatteries);

// function totalBatteries(batteryBatches){
//     let totalAmountofBatteries= 0;
//     for (const batteries of batteryBatches){
//         totalAmountofBatteries += batteries
//     }
// }

// const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(totalBatteries);

const totalBatteries = batteryBatches.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(totalBatteries);
