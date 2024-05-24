/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
    let W = words.length;
    let maxScore = 0;
    let freq = new Array(26).fill(0);
    for (let c of letters) freq[c.charCodeAt(0) - 97]++;
    function isValidWord(subsetLetters) {
        for (let c = 0; c < 26; c++) {
            if (freq[c] < subsetLetters[c]) return false;
        }
        return true;
    }
    function check(w, words, score, subsetLetters, totalScore) {
        if (w === -1) {
            maxScore = Math.max(maxScore, totalScore);
            return;
        }
        check(w - 1, words, score, subsetLetters, totalScore);
        let L = words[w].length;
        for (let i = 0; i < L; i++) {
            let c = words[w].charCodeAt(i) - 97;
            subsetLetters[c]++;
            totalScore += score[c];
        }
        if (isValidWord(subsetLetters)) check(w - 1, words, score, subsetLetters, totalScore);
        for (let i = 0; i < L; i++) {
            let c = words[w].charCodeAt(i) - 97;
            subsetLetters[c]--;
            totalScore -= score[c];
        }
    }
    check(W - 1, words, score, new Array(26).fill(0), 0);
    return maxScore;
};