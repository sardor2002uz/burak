// console.log("Hello World!");



// function reverseSentence(str: string): string {
//     return str
//         .split(" ")
//         .map((word: string) =>
//             word.replace(
//                 /[a-zA-Z]+/g,
//                 (letters: string) => letters.split("").reverse().join("")
//             )
//         )
//         .join(" ");
// }

// console.log(reverseSentence("we like coding!"));




// function getSquareNumbers(numbers: number[]) {
//     return numbers.map(function (number: number) {
//         return {
//             number: number,
//             square: number * number
//         };
//     });
// }

// console.log(getSquareNumbers([1, 2, 3]));




// function palindromCheck(str: string): boolean {
//     const reverse = str.split("").reverse().join("");

//     return str === reverse;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false




/* Project Standards:
  - Logging standards
  - Naming standards
      function, method, variable => CAMEL      goHome
      class => PASCAL                          MemberService
      folder => KEBEB
      css => SNAKE                             button_style
 - Error handling


*/

/* 
 Traditinal Api
 Rest Api        3turdagi eng kop ishlatadigon Api larimiz
 GraphQl Api
 ...
*/






// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   arr.forEach((value) => {
//     if (typeof value === "number") {
//       sum += value;
//     }
//   });

//   return sum;
// }

// console.log(
//   calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])
// );




function objectToArray(obj: object): [string, any][] {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 10, b: 20 }));