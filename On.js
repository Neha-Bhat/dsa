// If the operation increases linearly with the number of elements, then the time complexity will be O(n).

let arr = new Array(1000);
arr.fill("test");
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}
