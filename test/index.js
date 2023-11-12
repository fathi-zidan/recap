// Write a function swapCase that takes a string and returns a new string with uppercase letters converted to lowercase and vice versa.

function swapCase(string) {
    const newString = string.split('');
    // console.log(newString);
    const arr = newString.map((ele) => {
        if (ele.toLowerCase() === ele) {
            return ele.toUpperCase();
        } else {
            return ele.toLowerCase();
        }
    });
    return arr.join('');
}

// string.split("").map((char)=> char === char.toUpperCase()? char.toLowerCase():char.toUpperCase()).join("")}
console.log(swapCase("Hello World")); // Output: "hELLO wORLD"
console.log(swapCase("JavaScript")); // Output: "jAVASCRIPT"