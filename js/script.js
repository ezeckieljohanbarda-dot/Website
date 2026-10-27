const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

document.getElementById("signInForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;

    if (user === "karltzy" && pass === "1234") {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "pages/home/index.html";
    } else {
        alert("Invalid login");
    }
});