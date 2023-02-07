let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "chaibdraa.laid@gmail.com",
    Password : "26A1978D4508C4F0149C9E4364711E32B306",
    To : 'mouss27001@gmail.com',
    From : "chaibdraa.laid@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
  }



