// K th Max and Min in an array.


const findKthMaxOrMin=(arr,target)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1 ; j < arr.length; j++) {
            if (arr[i]>arr[j]) {
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr[target-1];
}


const array=[ 8, 1, 3, 2, 6, 7]
const target=2
console.log(findKthMaxOrMin(array,target))

const sortArray=(arr)=>{
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (arr[i]<arr[j]) {
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr;
}

console.log(sortArray(array));