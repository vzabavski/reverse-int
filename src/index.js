module.exports = function reverse (n) {
    reverseN = '';

    n = Math.abs(n);
    n = n.toString().split('').reverse();
        for (let x of n) {
        reverseN +=x;
        }
    return parseInt(reverseN)
}
