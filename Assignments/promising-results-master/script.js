document.addEventListener("DOMContentLoaded", function() {
  slowMath
    .add(6, 2)
    .then(num => {
      console.log(num);
      return slowMath.multiply(num, 2);
    })
    .then(num => {
      console.log(num);
      return slowMath.divide(num, 4);
    })
    .then(num => {
      console.log(num);
      return slowMath.subtract(num, 3);
    })
    .then(num => {
      console.log(num);
      return slowMath.add(num, 98);
    })
    .then(num => {
      console.log(num);
      return slowMath.remainder(num, 2);
    })
    .then(num => {
      console.log(num);
      return slowMath.multiply(num, 50);
    })
    .then(num => {
      console.log(num);
      return slowMath.remainder(num, 40);
    })
    .then(num => {
      console.log(num);
      return slowMath.add(num, 32);
    })
    .then(num => {
      console.log(`The final result is ${num}.`);
    })
    .catch(err => {
      console.log(err);
    });
});
// async function doMath() {
//   try {
//     await slowMath.add(6, 2);
//     await console.log(sum);
//     await slowMath.multiply(sum, 2);
//     await console.log(product);
//     await slowMath.divide(product, 4);
//     await console.log(quotient);
//     await slowMath.subtract(quotient, 3);
//     await console.log(difference);
//     await slowMath.add(difference, 98);
//     await console.log(sum);
//     await slowMath.remainder(sum, 2);
//     await console.log(remainder);
//     await slowMath.multiply(remainder, 50);
//     await console.log(product);
//     await slowMath.remainder(product, 40);
//     await console.log(remainder);
//     await slowMath.add(remainder, 32);
//     await console.log(sum);
//     await console.log(`The final result is ${sum}!`);
//   } catch (err) {
//     console.log(err);
//   }
// }
// doMath();
