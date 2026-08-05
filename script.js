// services list
const servicesList=[
    {
        Img:"drycleaning.avif",
        Name:"Dry Cleaning",
        Price:200.00
    },
    {
        Img:"Ironing.jpg",
        Name:"Ironing",
        Price:100.00
    },
    {
        Img:"stainremoval.jpg",
        Name:"Stain Removal",
        Price:100.00
    },
    {   
        Img:"washndFold.jpg",
        Name:"Washing And Folding",
        Price:150.00
    },
    {
        Img:"leathercleaning.avif",
        Name:"Leather & Suede Cleaning",
        Price:900.00
    }
];

// initialising variable
let cartItems=0;
let totalAmount=0;
let currentService=0;

const addBtn=document.querySelector(".add");
const skipBtn=document.querySelector(".skip");
const bookBtn=document.querySelector(".info form button");

// showing services in service section
const showService=(service)=>{
    document.querySelector(".service img").src=service.Img;
    document.querySelector(".sname").innerText=service.Name;
    document.querySelector(".price").innerText=service.Price.toFixed(2);
};

// showing the cart items in the bill section
const addInBill=(service)=>{
    const table=document.querySelector(".accounts table tbody");
    table.innerHTML+=
        `<tr>
            <td>${cartItems+1}</td>
            <td>${service.Name}</td>
            <td>₹ ${service.Price.toFixed(2)}</td>
        </tr>`;
};

// adding event listener to add button
addBtn.addEventListener("click",()=>{
    if(cartItems==0){
        document.querySelector(".noItems").style.display="none";
        const table=document.querySelector(".accounts table");
        table.style.height="40vh";
        table.innerHTML+="<tbody></tbody>";
    }
    addInBill(servicesList[currentService]);
    totalAmount+=servicesList[currentService].Price;
    document.querySelector(".totalAmount").innerText=totalAmount.toFixed(2);
    cartItems++;
    currentService++;
    showService(servicesList[currentService]);

    // enabling booknow button
    if(cartItems>0){
        bookBtn.style.backgroundColor="rgb(19, 194, 229)";
    }
});

// adding event listener to skip button
skipBtn.addEventListener("click",()=>{
    currentService++;
    showService(servicesList[currentService]);
});

// notifying on the booking
const info=document.querySelectorAll(".info input");
const form=document.querySelector(".info form")
bookBtn.addEventListener("click",()=>{
    if(info[0].value && info[1].value && info[2].value ){
        form.innerHTML+="<p>&#9432; Thank you for contacting, we will get back to you soon</p>";
    }
});