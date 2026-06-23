const themeBtn =
document.getElementById("themeBtn");

let darkMode = true;

themeBtn.addEventListener("click",()=>{

if(darkMode){

document.body.style.background="#ffffff";
document.body.style.color="#000000";

darkMode=false;

}else{

document.body.style.background="#0f0f0f";
document.body.style.color="#ffffff";

darkMode=true;

}

});

   const movies = [

{
title:"Inception",
image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
description:"A mind-bending science fiction thriller."
},

{
title:"Interstellar",
image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
description:"A journey through space and time."
},

{
title:"The Dark Knight",
image:"https://images.unsplash.com/photo-1478720568477-152d9b164e26",
description:"The legendary Batman adventure."
},

{
title:"Avengers Endgame",
image:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
description:"Earth's mightiest heroes unite."
},

{
title:"Joker",
image:"https://images.unsplash.com/photo-1505685296765-3a2736de412f",
description:"The origin story of Gotham's villain."
},

{
title:"Spider-Man",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
description:"A friendly neighborhood superhero."
}

];

const container =
document.getElementById("movieContainer");

movies.forEach(movie=>{

container.innerHTML += `

<div class="card">

<img src="${movie.image}">

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
