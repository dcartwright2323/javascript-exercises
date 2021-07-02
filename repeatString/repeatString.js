const repeatString = function(toRepeat, num) {
    if (num > 0) {
        let toReturn = toRepeat;
        for (i = 0; i < num - 1; i++) {
            toReturn += toRepeat;
        }
        return toReturn;
    } else if (num == 0) {
            return '';
    } else {
        return 'ERROR';
    }
};

module.exports = repeatString;
