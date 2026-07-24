//finding maximum amoung the elements in arrray
let dummy=[32,54,3,21,89,26];
function maximum(array){
    let max=array[0];
    for(let ele of array){
        if(ele>max){
            max=ele;
        }
    }return max;
}

//finding sum of elements of array
console.log(maximum(dummy));
const totalsum=(array)=>{
    let sum=0;
    for(let i of array){
        sum+=i;
    }return sum;
};
console.log(totalsum(dummy));

//counting odd no. in array
const countodd=function(array){
    let count=0;
    for(let ele of array){
        if(ele%2!=0){
            count++;
        }
    }return count;
};
console.log(countodd(dummy));
