function reverseArray(arr){
    left =0;
    right=arr.length-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]

        left++
        right--
    }
    return arr;
}
let numbers=[1,2,3,4,5]
let numberTwo=[1,2,3,4,5,6]
let numberThree=[0,0,0,0,0,0]
let numberFour=[-1,-2,-4,NaN,Infinity]
console.log(reverseArray(numbers));
console.log(reverseArray(numberTwo));

console.log(reverseArray(numberThree));
console.log(reverseArray(numberFour));