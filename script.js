const division =(a,b)=>{
  return new Promise ((resolve,reject) => {
    console.log(`Dividing ${a} by ${b}...`);
      if(b==0){
        reject("Division by zero is not allowed.");
      }else{
        resolve(a/b);
      }
  });
};

division(10,2)
  .then((result)=>{
    console.log("Result:",result);
    return division(100,2);
  })
  .then((result)=>{
    console.log("Result:",result);
    return division(10,5);
  })
  .then((result)=>{
    console.log("Result:",result);
    return division(30,6);
  })
  .then((result)=>{
    console.log("Result:",result);
    return division(40,0);
  })
  .then((result)=>{
    console.log("Result:",result);
  })
  .catch((data)=>{
    console.log("Error:",data);
  });

