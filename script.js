let p=10000,n=1,r=0.1,t=2;
const Amount= p*((1+r/n)**(n*t));
const compoundIntreset=Amount-p;
console.log("Amount:",Amount);
console.log("compoundIntreset:" ,compoundIntreset);
