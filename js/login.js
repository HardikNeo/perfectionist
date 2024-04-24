const login = document.getElementById("login-form");
const logbtn = document.querySelector(".log-btn");
var loggedin = 0;

function lgnclk() {
  if (loggedin === 0) {
    login.style.display = "flex";
  } else if (loggedin === 1) {
    logbtn.textContent = "Login";
    loggedin = 0;
  } else {
    console.log("Idk");
  }
}
function xclk() {
  login.style.display = "none";
}
document.getElementById("submit-login").onclick = function change() {
  loggedin = 1;
  logbtn.textContent = "Logout";
};
