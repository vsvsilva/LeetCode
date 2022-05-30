/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = Number(String(x).split('').reverse().join(''));
    if(x == rev){
        return true;
    }
    return false;
};