const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    const colors = [
        "#f8f9fa",
        "#d4edda",
        "#d1ecf1",
        "#fff3cd"
    ];

    document.body.style.backgroundColor =
    colors[Math.floor(Math.random()*colors.length)];

});

fetch("https://dummyjson.com/quotes/random")
.then(response=>response.json())
.then(data=>{

    document.getElementById("quote").innerHTML =
    `"${data.quote}"`;

});

document.getElementById("contactForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message");

    if(name==="" || email===""){

        message.innerHTML =
        "Please fill all fields";

        message.style.color="red";

        return;
    }

    message.innerHTML =
    "Message Submitted Successfully";

    message.style.color="green";

});
