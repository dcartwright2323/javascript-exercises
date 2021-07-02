const reverseString = function(toReverse) {
    let toReturn = '';
    for (let i = toReverse.length - 1; i >= 0; i-- ) {
        toReturn += toReverse.charAt(i);
    }
    return toReturn;
};

module.exports = reverseString;
