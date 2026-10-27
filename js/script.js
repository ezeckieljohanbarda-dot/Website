const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;                                    

    if (username === "karltzy" && password === "karltzy123") {

        alert("Login successful!");

        window.location.href = "/pages/home/index.html";

    } else {
        alert("Incorrect username or password!");
    }
});