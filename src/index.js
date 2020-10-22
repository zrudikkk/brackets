module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let openBrackets = bracketsConfig.map(brk => brk[0]);
    let closeBrackets = bracketsConfig.map(brk => brk[1]);
    for (let i = 0; i < str.length; i++){
        let n = openBrackets.indexOf(str[i]);
        if (n > -1) {
            arr.push(closeBrackets[n]);
        }
        if (closeBrackets.includes(str[i]) && str[i] !== arr.pop()) {
            return false;
        }
    }
    return arr.length === 0;
}
