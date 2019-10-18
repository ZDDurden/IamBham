// document.addEventListener("DOMContentLoaded", function() {
//   slowMath
//     .add(6, 2)
//     .then(sum => {
//       console.log(sum);
//       return slowMath.multiply(sum, 2);
//     })
//     .then(product => {
//       console.log(product);
//       return slowMath.divide(product, 4);
//     })
//     .then(quotient => {
//       console.log(quotient);
//       return slowMath.subtract(quotient, 3);
//     })
//     .then(difference => {
//       console.log(difference);
//       return slowMath.add(difference, 98);
//     })
//     .then(sum => {
//       console.log(sum);
//       return slowMath.remainder(sum, 2);
//     })
//     .then(remainder => {
//       console.log(remainder);
//       return slowMath.multiply(remainder, 50);
//     })
//     .then(product => {
//       console.log(product);
//       return slowMath.remainder(product, 40);
//     })
//     .then(remainder => {
//       console.log(remainder);
//       return slowMath.add(remainder, 32);
//     })
//     .then(sum => {
//       console.log(`The final result is${sum}!`);
//     })
//     .catch(err => {
//       console.log("There has been an issue!");
//       console.log(err);
//     });
// });
async function doMath() {
  try {
    await slowMath.add(6, 2);
    await console.log(sum);
    await slowMath.multiply(sum, 2);
    await console.log(product);
    await slowMath.divide(product, 4);
    await console.log(quotient);
    await slowMath.subtract(quotient, 3);
    await console.log(difference);
    await slowMath.add(difference, 98);
    await console.log(sum);
    await slowMath.remainder(sum, 2);
    await console.log(remainder);
    await slowMath.multiply(remainder, 50);
    await console.log(product);
    await slowMath.remainder(product, 40);
    await console.log(remainder);
    await slowMath.add(remainder, 32);
    await console.log(sum);
    await console.log(`The final result is ${sum}`);
  } catch (err) {
    console.log(err);
  }
}
doMath();
