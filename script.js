const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");
if(document.body.classList.contains("light-mode")){
    themeBtn.innerHTML = "🌞 Theme";
}else{
    themeBtn.innerHTML = "🌙 Theme";
}

});

const movies = [

{
title:"The Last Kingdom",
image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
description:"An epic historical drama full of action and adventure."
},

{
title:"Cyber Future",
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
description:"A futuristic world powered by artificial intelligence."
},

{
title:"Dark Horizon",
image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
description:"A suspense thriller that keeps you on the edge."
},

{
title:"Space Odyssey",
image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
description:"Journey through the mysteries of deep space."
},

{
title:"Code Hunter",
image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
description:"A cybersecurity expert tracks a global threat."
},

{
title:"Legends Rise",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
description:"Heroes unite to save the world from chaos."
}

];

const movieContainer =
document.getElementById("movieContainer");

movies.forEach(movie => {

movieContainer.innerHTML += `

<div class="card">
<img src="${movie.image}" alt="${movie.title}">
<h3>${movie.title}</h3>
<p>${movie.description}</p>
</div>

`;

});

document
.getElementById("signupForm")
.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("email").value;

const message =
document.getElementById("message");

const emailPattern =
/^[^\s@]+@[^\s@]+.[^\s@]+$/;

if(email === ""){

message.innerHTML =
"Please enter your email address.";

message.style.color =
"#ffcc00";

return;

}

if(!emailPattern.test(email)){

message.innerHTML =
"Please enter a valid email address.";

message.style.color =
"#ff4444";

return;

}

message.innerHTML =
"🎉 Welcome to StreamFlix! Membership request received.";

message.style.color =
"#00ff99";

document.getElementById("signupForm").reset();

});
