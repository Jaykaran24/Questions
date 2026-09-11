function lengthofLongestSubstring(s){
    let maxlength = 0;
    for (let i = 0 ; i < s.length ; i++){
        const seen = new Set();
        for(let j = i ; j < s.length ; j++){
            if (seen.has(s[j])){
                break
            }
            seen.add(s[j]);
            maxlength = Math.max(maxlength,j-i+1);
        }
    }
    return maxlength;
}