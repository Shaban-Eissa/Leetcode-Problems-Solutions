var titleToNumber = function(columnTitle) {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + charValue;
    }
    
    return result;
};
