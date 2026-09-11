function check_inclusion(s1,s2){
    const n1 = s1.length;
    const n2 = s2.length;
    if(n1>n2){
        return false; 
    }
    sortedS1 = s1.split("").sort().join("");
    for(let i = 0 ; i<= n2-n1 ; i++){
        const window = s2.slice(i,i+n1);
        const sortedWindow = window.split("").sort().join("");
        if(sortedWindow == sortedS1){
            return true
        }
    }
    return false
}

s = "ahsfkuhaihf"
x = "fuk"
console.log(check_inclusion(x,s))