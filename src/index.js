module.exports = function toReadable (number) {
    if (number === 0) return "zero";

    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function convertHundreds(n) {
        if (n < 100) return convertTens(n);
        return `${units[Math.floor(n / 100)]} hundred${
            n % 100 !== 0 ? " " + convertTens(n % 100) : ""
        }`;
    }

    function convertTens(n) {
        if (n < 10) return units[n];
        if (n < 20) return teens[n - 10];
        return `${tens[Math.floor(n / 10)]}${
            n % 10 !== 0 ? " " + units[n % 10] : ""
        }`;
    }

    return convertHundreds(number);
};
