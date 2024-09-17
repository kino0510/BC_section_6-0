function addNums(n1, n2) {
    return n1 + n2;
}

function formatTxt(imputString, condition) {
    if (imputString === "test" && condition !== "temp") {
        return condition
    } else {
        return `${condition} random text`;
    }
}

var catsInTokyo = 0;


console.log(addNums(1, 2));
console.log(formatTxt("test", "example"));
console.log(catsInTokyo);