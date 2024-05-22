/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    const dfsBacktracking = (s, path, result) => {
        if (s.length == 0){
            result.push(path);
            return;
        }
        for (let i = 1; i <= s.length; i++){
            let partition = s.substring(0, i);
            if (partition.split('').reverse().join('') === partition){
                dfsBacktracking(s.substring(i), [...path, partition], result);
            }
        }
    };
    dfsBacktracking(s, [], result)
    return result;
};