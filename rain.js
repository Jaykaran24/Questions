function trap(height){
    let [l,r] = [0, height.length -1];
    let [leftmax,rightmax] = [height[l],height[r]];
    let res = 0;
    while (l<r){
        if(leftmax<rightmax){
            l++;
            leftmax = Math.max(leftmax,height[l])
            res +=leftmax-height[l]
        }
        else 
        {
            r--;
            rightmax = Math.max(rightmax,height[r]);
            res += rightmax-height[r];
        }
    }
    return res
}

const tank = [3,6,2,7,8,2];
console.log(trap(tank))