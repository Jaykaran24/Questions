function subarraysum(nums,k){
    let count = 0;
    const n = nums.length ;
    for (let i = 0 ; i < n ; i++){
        let currsum = 0;
        for(let j = i ; j<n ; j++){
            currsum += nums[j];
            if(currsum == k ){
                count++;
            }
        }
    }
    return n ;
}