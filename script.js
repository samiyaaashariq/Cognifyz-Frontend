const themeBtn =
document.getElementById("themeBtn");

let darkMode = true;

themeBtn.addEventListener("click",()=>{

    if(darkMode){

        document.body.style.background =
        "#1d1d3d";

        darkMode = false;

    }else{

        document.body.style.background =
        "#0f0f0f";

        darkMode = true;
    }

});

fetch("https://dummyjson.com/products?limit=8")

.then(response=>response.json())

.then(data=>{

    const container =
    document.getElementById("movieContainer");

    data.products.forEach(movie=>{

        container.innerHTML += `

        <div class="card">

            <img src="${movie.thumbnail}">

            <h3>${movie.title}</h3>

            <p>${movie.description}</p>

        </div>

        `;
    });

});

document
.getElementById("signupForm")

.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message");

    if(email===""){

        message.innerHTML =
        "Please enter your email.";

        message.style.color =
        "yellow";

        return;
    }

    message.innerHTML =
    "Welcome to StreamFlix!";

    message.style.color =
    "lightgreen";

});
