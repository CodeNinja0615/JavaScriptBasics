/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let str = '';
    let count = 0;
    let exists = [];
    let flag = true;
    while (count < s.length) {
        for (let i in s) {
            if (!(str.includes(s[count + parseInt(i)])) && (count + parseInt(i)) < s.length) {
                str = str + s[count + parseInt(i)];
            } else {
                if (!(exists.includes(str))) {
                    for (let j in exists) {
                        if (exists[j].includes(str)) {
                            flag = false;
                        }
                    }
                    if (exists.length === 0 || flag === true) {
                        exists.push(str);
                        break
                    }
                }
                count++;
                str = '';
                flag = true
                break;
            }
        }
    }
    count = 0;
    for (let exist of exists) {
        if (exist.length > count) {
            count = exist.length;
        }
    }
    return count;
};



console.log(lengthOfLongestSubstring('abcabcbb'));



//use sets for better time complexity
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));


//GPT Code