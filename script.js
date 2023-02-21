let iconPassword = document.querySelectorAll(".icon-password");

    iconPassword.forEach(function(icon) {
    icon.addEventListener("click", function() {
        const target = icon.getAttribute("data-type");
        let inputPassword = document.querySelector(target);
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            inputPassword.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
}); 

//  Сравнение введенных пароля и подтверждения пароля.

const btnConfirm = document.querySelector(".btn");

btnConfirm.addEventListener("click", (event) => {
  const password = document.getElementById("input-password").value;
  const passwordConfirm = document.getElementById("confirm-password").value;

  event.preventDefault();

  if(password === "" || passwordConfirm === "") {
    errorOutput("Поля не повинні бути пусті!");    
  }
  else if (password === passwordConfirm) {
    alert("You are welcome");
  }
  else {
    errorOutput("Потрібно ввести однакові значення!");
  }
});

function errorOutput(message) {
  if (document.querySelector(".attention-text") === null) {
    const btn = document.querySelector(".btn");
    const attention = document.createElement("span");
    attention.classList.add("attention-text");
    attention.innerHTML = message;
    btn.before(attention);
    setTimeout(() => attention.remove(), 2000);
  }
}
   