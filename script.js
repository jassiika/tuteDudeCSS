// services list
const servicesList=[
    {
        Name:"Dry Cleaning",
        Price:200.00
    },
    {
        Name:"Ironing",
        Price:100.00
    },
    {
        Name:"Stain Removal",
        Price:100.00
    },
    {   
        Name:"Washing And Folding",
        Price:150.00
    },
    {
        Name:"Leather & Suede Cleaning",
        Price:900.00
    },
    {
        Name:"Wedding Dress Cleaning",
        Price:1200.00
    }
];

const BookServiceButton=document.querySelector(".headingContent button");
BookServiceButton.addEventListener("click",()=>{
    document.querySelector("#servicesSection").scrollIntoView();
});

// initialising variable
let cartItems=0;
let totalAmount=0;

const addBtn=document.querySelectorAll(".add");
const bookBtn=document.querySelector(".info form button");

// showing the items in the bill section
const addInBill=(id)=>{
    const table=document.querySelector(".accounts table tbody");
    table.innerHTML+=
        `<tr data-id="${id}">
            <td>${cartItems+1}</td>
            <td>${servicesList[id].Name}</td>
            <td>₹ ${servicesList[id].Price.toFixed(2)}</td>
        </tr>`;
};

// removing the items in the bill section
const removeFromBill=(id)=>{
    const row=document.querySelector(`.accounts table tr[data-id="${id}"]`);
    row.remove();
    updateSerialNo();
};

// updating serial no. in billing section
const updateSerialNo=()=>{
    const row=document.querySelectorAll(`.accounts table tbody tr`);
    row.forEach((row,index)=>{
        row.children[0].innerText=index+1;
    });
};

// adding event listener to add button
addBtn.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(cartItems==0){
            document.querySelector(".noItems").style.display="none";
            const table=document.querySelector(".accounts table");
            table.style.height="44vh";
            table.innerHTML+="<tbody></tbody>";
        }
        
        if(item.classList.contains("add")){
            //adding
            addInBill(item.id);
            item.classList.remove("add");
            item.classList.add("skip");
            item.innerHTML=`Remove Item <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>`;
            cartItems++;
            totalAmount+=servicesList[item.id].Price;
        }
        else{
            //removing
            removeFromBill(item.id);
            item.classList.remove("skip");
            item.classList.add("add");
            item.innerHTML=`Add item <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
            cartItems--;
            totalAmount-=servicesList[item.id].Price;
            if(cartItems==0){
                emptyCart();
            }
        }

        //removing the notify empty para html
        const p=document.querySelector(".info form p");
        if(cartItems && p){
            p.remove();
        }
        document.querySelector(".totalAmount").innerText=totalAmount.toFixed(2);
        
        // enabling booknow button
        if(cartItems>0){
            bookBtn.style.backgroundColor="rgb(19, 194, 229)";
        }else{
            bookBtn.style.backgroundColor="rgba(19, 194, 229, 0.297)";
        }
    });
});

// function to display no item msg
const emptyCart=()=>{
    document.querySelector(".accounts table tbody").remove();
    document.querySelector(".noItems").style.display="flex";
    const table=document.querySelector(".accounts table");
    table.style.height="auto";
};


// notifying on the booking
const info=document.querySelectorAll(".info input");
const form=document.querySelector(".info form")
bookBtn.addEventListener("click",()=>{
    console.log("clicked");
    if(cartItems==0){
        form.insertAdjacentHTML("beforeend","<p>&#9432; Add the items to the cart to book</p>");
        document.querySelector(".info form p").style.color="red";
    }
    else if(info[0].value && info[1].value && info[2].value ){
        // notifying on booking
        form.insertAdjacentHTML("beforeend","<p>&#9432; Email has been sent successfully</p></p>");
        document.querySelector(".info form p").style.color="rgb(59, 188, 59)";

        //replacing the skip item button with add one
        document.querySelectorAll(".skip").forEach(btn=>{
            btn.classList.remove("skip");
            btn.classList.add("add");
            btn.innerHTML=`Add item <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
        });

        //cleaning the variables
        cartItems=0;
        totalAmount=0;
        document.querySelector(".totalAmount").innerText="0.00";
        document.querySelectorAll(".info form input").forEach(ele=>{
            ele.value="";
        });

        // empting the cart
        emptyCart();
        bookBtn.style.backgroundColor="rgba(19, 194, 229, 0.297)";

        //removing the notification after 5sec
        setTimeout(()=>{
            document.querySelector(".info form p").remove();
        },5000);   
    }
});

