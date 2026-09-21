// console.log("Hello World!");



function reverseSentence(str: string): string {
    return str
        .split(" ")
        .map((word: string) =>
            word.replace(
                /[a-zA-Z]+/g,
                (letters: string) => letters.split("").reverse().join("")
            )
        )
        .join(" ");
}

console.log(reverseSentence("we like coding!"));