// # first approach (sorting approach)

// function findKthlargest(nums,k){
//     nums.sort((a,b)=> b-a)
//     return nums[k-1]
// }
// let nums=[1,3,2,4,5,9]
// console.log(findKthlargest(nums,4));

// second approach (quicksort)

function findKthlargest(nums,k){
    return quickSelect(nums,0,nums.length-1,nums.length-k)
}
function quickSelect(nums,left,right,k){
    if (left===right) return nums[left]

    let pivotIndex=partition(nums,left,right)
    if(pivotIndex===k) return nums[pivotIndex]
    if(pivotIndex>k) return quickSelect(nums,left,pivotIndex-1,k)
    return pivotIndex(nums,pivotIndex+1,right,k)
}
function partition(nums,left,right){
    let pivot =nums[right]
    let i = left

    for(let j=left;j<right;j++){
        if(nums[j]<=pivot){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i++
        }
    }
    [nums[i],nums[right]]=[nums[right],nums[i]]
    return i
}
let nums=[2,31,43,1123,344,2]
console.log(findKthlargest(nums,4));
