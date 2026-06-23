// Task 4

const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {

    const colors = [
        "#ffcccc",
        "#ccffcc",
        "#ccccff",
        "#ffffcc",
        "#ffd9b3"
    ];

    const randomColor =
    colors[Math.floor(Math.random()*colors.length)];

    document.body.style.backgroundColor =
    randomColor;
});


// Task 5

fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
.then(response => response.json())
.then(data => {

    const postsDiv =
    document.getElementById("posts");

    data.forEach(post => {

        postsDiv.innerHTML += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        `;
    });

});


// Task 6

document.getElementById("myForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message");

    if(name === "" || email === ""){

        message.innerHTML =
        "Please fill all fields";

        message.style.color = "red";

        return;
    }

    message.innerHTML =
    "Form Submitted Successfully";

    message.style.color = "green";

});