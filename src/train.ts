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




function palindromCheck(str: string): boolean {
    const reverse = str.split("").reverse().join("");

    return str === reverse;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false