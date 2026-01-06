function minMax(nums){
    max=nums[0]
    min=nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i]<min){
            min=nums[i]
        }
        if(nums[i]>max){
            max=nums[i]
        }
    }
}
let nums=[10,20,30.40,50]
let numsone=[10,-20,-30,-40]
let numstwo=[1,90,11,22,3]
let numsthree=[10,20,Infinity,NaN,40]
let numsfour=[Infinity,-1,NaN,9]
console.log(findMinMax(nums));
console.log(findMinMax(numsone));
console.log(findMinMax(numstwo));
console.log(findMinMax(numsthree));
console.log(findMinMax(numsfour));