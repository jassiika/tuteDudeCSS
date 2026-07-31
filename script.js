function division (a,b){
  return new Promise ((resolve,reject) => {
    console.log(`Dividing ${a} by ${b}...`);
    setTimeout(()=>{
      if(b===0){
        reject("Division by zero is not allowed.");
      }else{
        resolve(a/b);
      }
    },1000);
  });
};

division(10,2)
  .then((result)=>{
    console.log("Result:",result);
    return division(10,0);
  })
  .then((result)=>{
    console.log("Result:",result);
  })
  .catch((data)=>{
    console.log("Error:",data);
  });

