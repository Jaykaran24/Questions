function quicksort(nums,si,ei){
    if(si>=ei){
        return;
    }
    const pid = partition(nums,si,ei);
    quicksort(nums,si,pid-1);
    quicksort(nums,pid+1,ei);
}
function partition(nums,si,ei){
    const pivot = nums[ei];
    let i = si - 1;
    for(let j = si ; j < ei ; j++){
        if(nums[j]<pivot){
            i++;
            let temp = nums[j];
            nums[j]=nums[i];
            nums[i]=temp;
        }
    }
    i++;
    let temp = pivot;
    nums[ei]=nums[i];
    nums[i]=temp;
    return i;
}

const arr = [2,5,3,7,6,4]
quicksort(arr,0,arr.length-1)
console.log(arr)