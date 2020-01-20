export function reverseString(string) {
    let reversedString = "";
    if (typeof (string) !== 'string') {
        throw new Error("Please submit a string")
    }
    for (let i = string.length; i > 0; i--)
        reversedString += string[i - 1];

    return reversedString
}

// export function reversedString(str) {
//   const reverse = str
//     .split("")
//     .reverse()
//     .join("");

//   return reverse;
// }
