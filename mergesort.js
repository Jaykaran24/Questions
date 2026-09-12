function mergesort(nums,si,ei){
    if(si>=ei){
        return;
    }
    let mid = Math.floor(si + (ei-si)/2);
    mergesort(nums,si,mid);
    mergesort(nums,mid+1,ei);
    merge(nums,si,mid,ei);
}

function merge(nums,si,mid,ei){
    const arr = new Array(ei - si +1);
    let i = si;
    let j = mid+1;
    let k = 0;
    while(i<=mid && j <= ei ){
        if(nums[i]<nums[j]){
            arr[k] = nums[i];
            i++;
        }
        else{
            arr[k] = nums[j];
            j++;
        }
        k++;
    }
    while(i<=mid){
        arr[k]=nums[i]
        i++;k++;
    }
    while(j<=ei){
        arr[k]=nums[j]
        j++;k++;
    }
    for(let i = si,k = 0 ; k < arr.length ; i++,k++){
        nums[i] = arr[k];
    }

}

const arr = [2,6,3,4,7]
const nums = [1,8,5]
mergesort(arr,0,arr.length-1)
console.log(arr)