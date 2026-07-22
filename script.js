const n1= 73;

// Calculating the first n numbers sum
var sum=0;
for(let i=1;i<=n1;i++){
    sum+=i;
}
console.log(`The sum of first ${n1} numbers is ${sum}`);

// Printing the table of n
const n2=153
for(let i=1;i<11;i++){
    console.log(`${n2} * ${i} = ${n2*i}`);
}

// Prime no. check
const n3= 54;
if(n3==0||n3==1){
    console.log(`${n3} is not prime number.`);
}
let flag =0;
for(let i=2;n3>=2 && i*i<=n3;i++){
    if(n3%i==0){
        console.log(`${n3} is not prime number.`);
        flag=1;
        break;
    }
}
if(!flag)
    console.log(`${n3} is a prime number.`);

// finding sum of digits
var n4=5432;
let original =n4;
let sum2=0;
while(n4){
    sum2+=n4%10;
    n4=Math.floor(n4/10);
}
console.log("sum of digits of number",original,"is",sum2);

//factors
const n6=76;
console.log(`Factors of ${n6} are:`);
for(let i=1;i<=n6;i++){
    if(n6%i==0){
        console.log(i);
    }
}

//armstrong check
const n5=153;
let temp=n5;
let count=0;
while(temp){
    count++;
    temp=Math.floor(temp/10);
}
temp=n5;
let sum3=0;
while(temp){
    let digit=temp%10;
    let product=1;
    for(let i=1;i<=count;i++){
        product*=digit;
    }sum3+=product;
    temp=Math.floor(temp/10);
}if(sum3==n5) {
    console.log(n5,"is a Armstrong number.");
}else{
    console.log(n5,"is not a Armstrong number.");
}
