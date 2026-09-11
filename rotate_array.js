function rotate(nums,k){
    const n = nums.length;
    if (n==0){ 
        return;
    }
    k = k%n;
    for(let i = 0 ; i < k ; i++){
        const last = nums[n-1];
        for(let j = n-1 ; j > 0 ; j--){
            nums[j] = nums [j-1];
        }
        nums[0] = last;
    }
    return nums;
}
arr = [1,2,3,4,5]

console.log(rotate(arr,3))