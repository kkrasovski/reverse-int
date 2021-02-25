module.exports = function reverse(n) {
    splitInput = String(n).split("");
    let result;
    if (splitInput[0] == "-") {
        splitInput.shift("");
        result = splitInput.reverse().join("");
    } else {
        result = splitInput.reverse().join("");
    }
    return result;
};
