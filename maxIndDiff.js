function maxIndexDiff(arr){
    const n = arr.length;
    let LMin = new Array(n),Rmax = new Array(n);
    LMin[0] = arr[0];
    for(let i = 1 ; i < n ; i++){
        LMin[i] = Math.min(LMin[i-1],arr[i]);
    }
    Rmax[n-1] = arr[n-1]
    for(let j = n-2 ; j >=0  ; j--){
        Rmax[j] = Math.max(Rmax[j+1],arr[j]);
    }
    let i = 0 , j= 0 , maxdiff = 0;
    while(i<n && j <n){
        if (LMin <= Rmax){
            maxdiff=Math.max(maxdiff,j-i)
            j++
        }
        else
        {
            i++;
        }
    }
    return maxdiff
}

function maxDiffBrute(arr){
    const n = arr.length;
    let maxdiff = 0;
    for (let i = 0 ;i<n ; i++){
        for(let j = n-1;j>=i;j--){
            
            if(arr[i]<=arr[j]){
                maxdiff = Math.max(maxdiff,j-i)
            }
        }
    }
}
arr = [2,4,3,6,1,8]
console.log(maxDiffBrute(arr))