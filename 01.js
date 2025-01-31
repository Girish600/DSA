// // Merge Sorted Array 
// // Example 1: Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// let nums1 = [1,2,3,0,0,0];
// let nums2 = [2,5,6];
// let i=0, j=0;
// const mergeTwoSortedArray=(arr1,arr2)=>{
//     arr1=arr1.filter((num)=>num!==0);
//     arr2=arr2.filter(num=>num!==0);

//     let mergeArray=[];
//     while(i<arr1.length && j<arr2.length){
//         if (arr1[i]<arr2[j]) {
//             mergeArray.push(arr1[i])
//             i++
//         }else{
//             mergeArray.push(arr2[j])
//             j++
//         }
//     }
//     while (i<arr1.length) {
//         mergeArray.push(arr1[i])
//         i++
//     }
//     while (j<arr2.length) {
//         mergeArray.push(arr2[j])
//         j++
//     }
//     return mergeArray
// }

// console.log(mergeTwoSortedArray(nums1,nums2));

// Remove Element 

// Input: nums = [3,2,2,3], val = 3 Output: 2, nums = [2,2,_,_]

// let nums = [3,2,2,3];

// const removeElement=(arr,val)=>{
//     let temp=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!==val) {
//             temp.push(arr[i])
//         }
//     }
//     return temp;
// }

// console.log(removeElement(nums,2));

// Input: nums = [1,1,2] Output: 2, nums = [1,2,_]

// const removeElement=(arr)=>{
//     let temp=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!==arr[i+1]) {
//             temp.push(arr[i])
//         }
//     }
//     return temp
// }

// let nums = [1,1,2]
// console.log(removeElement(nums));

// Input: nums = [1,1,1,2,2,3] Output: 5, nums = [1,1,2,2,3,_]

// // Input: nums = [3,2,2,3], val = 3
// // Output: 2, nums = [2,2,,]
// // Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// // It does not matter what you leave beyond the returned k (hence they are underscores).
// // 3) Remove Duplicates from Sorted Array


// // const remove=(arr,n)=>{
// //     let ans=[]
// //  for (let i=0;i<arr.length;i++){
// //       if(arr[i]!==n){
// //         ans.push(arr[i])
// //       }
// //  }
// //  return ans
// // }

// // let arr=[3,2,2,3]
// // console.log(remove(arr,3))




// // 1) Merge Sorted Array 

// // Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


let  merge = (nums1, m, nums2, n) =>{
    let i = m - 1;
    let j = n - 1; 
    let k = m + n - 1; 

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); 



// // 3) Remove Duplicates from Sorted Array


// // Example 1:

// // Input: nums = [1,1,2]
// // Output: 2, nums = [1,2,_]
// // Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// // It does not matter what you leave beyond the returned k (hence they are underscores).


// // const RemoveDuplicates=(array)=>{

// //     for (let i = 0; i < array.length; i++) {
// //         for (let j = 0; j < array.length; j++) {
// //             if(array[i]>array[j]){
// //                 [array[i],array[j]]= [array[j],array[i]]
// //             }
            
// //         }
        
// //     }
// //     let ans=[]
// //     for (let i = 0; i < array.length; i++) {
// //         if(array[i]!==arr[i+1]){
// //             ans.push(array[i])
// //         }
// //     }
// //     return ans
// // }
// // let arr=[1,1,2]
// // console.log(RemoveDuplicates(arr));

// // 4) Remove Duplicates from Sorted Array II
// // Example 1:

// // Input: nums = [1,1,1,2,2,3]
// // Output: 5, nums = [1,1,2,2,3,_]
// // Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// // It does not matter what you leave beyond the returned k (hence they are underscores).
// 
// function removeDuplicates(nums) {
//     let k = 0;  
//     let count = 1; 

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             count++; 
//         } else {
//             count = 1; 
//         }

//         if (count <= 2) { 
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// }

// let nums = [1, 1, 1, 2, 2, 3];
// let k = removeDuplicates(nums);
// console.log(k, nums.slice(0, 5));