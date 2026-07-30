// deatil of students
const details = [
  {
    Name: "Salmaan Ahmed",
    Marks: "38%",
    Class: "3rd",
    Address: "India"
  },
  {
    Name: "Riya Sharma",
    Marks: "85%",
    Class: "10th",
    Address: "123, ABC Colony, Delhi"
  },
  {
    Name: "Rohan Patel",
    Marks: "70%",
    Class: "12th",
    Address: "456, XYZ Street, Mumbai"
  },
  {
    Name: "Priya Singh",
    Marks: "95%",
    Class: "8th",
    Address: "789, PQR Nagar, Bangalore"
  },
  {
    Name: "Anil Gupta",
    Marks: "60%",
    Class: "9th",
    Address: "101, LMN Road, Kolkata"
  },
  {
    Name: "Neha Verma",
    Marks: "80%",
    Class: "11th",
    Address: "222, DEF Avenue, Chennai"
  },
  {
    Name: "Manoj Kumar",
    Marks: "75%",
    Class: "10th",
    Address: "333, GHI Lane, Hyderabad"
  },
  {
    Name: "Pooja Mishra",
    Marks: "88%",
    Class: "12th",
    Address: "444, STU Colony, Pune"
  },
  {
    Name: "Rajesh Singhania",
    Marks: "92%",
    Class: "9th",
    Address: "555, VWX Street, Jaipur"
  },
  {
    Name: "Aarav Mehta",
    Marks: "78%",
    Class: "11th",
    Address: "12, Rose Colony, Ahmedabad"
    },
    {
    Name: "Kavya Joshi",
    Marks: "91%",
    Class: "10th",
    Address: "45, Green Park, Lucknow"
    },
    {
    Name: "Vikram Rao",
    Marks: "65%",
    Class: "7th",
    Address: "67, Lake View Road, Hyderabad"
    },
    {
    Name: "Sneha Kapoor",
    Marks: "84%",
    Class: "12th",
    Address: "89, Silver Street, Chandigarh"
    },
    {
    Name: "Aditya Sharma",
    Marks: "73%",
    Class: "8th",
    Address: "34, Park Avenue, Jaipur"
    },
    {
    Name: "Meera Nair",
    Marks: "96%",
    Class: "9th",
    Address: "56, Palm Residency, Kochi"
    },
    {
    Name: "Rahul Das",
    Marks: "58%",
    Class: "6th",
    Address: "78, River Side Road, Kolkata"
    },
    {
    Name: "Ishita Roy",
    Marks: "89%",
    Class: "11th",
    Address: "90, Lake Town, Delhi"
    },
    {
    Name: "Yash Verma",
    Marks: "76%",
    Class: "10th",
    Address: "23, Sunrise Colony, Noida"
    },
    {
    Name: "Ananya Patel",
    Marks: "93%",
    Class: "12th",
    Address: "11, MG Road, Surat"
    }
];

//dipalying details of students
const container=document.querySelector(".container");
function displayNames(details){
  details.forEach(student=>{
    const box= document.createElement("div");
    box.classList.add("boxes");
    box.innerHTML=`
        <p>Name: ${student.Name}</p>
        <p>Marks: ${student.Marks}</p>
        <p>Class: ${student.Class}</p>
        <p>Address: ${student.Address}</p>
    `;
    container.appendChild(box);
  });
}

displayNames(details);

// searching name logic (using filter)
const button=document.querySelector(".search");
button.addEventListener("click",()=>{
    const input=document.querySelector(".searchbar input");
    let searchText=input.value.toLowerCase();
    let matchedNames=details.filter(student=>
      student.Name.toLowerCase().startsWith(searchText)
    );
    container.innerHTML="";
    displayNames(matchedNames);
});
