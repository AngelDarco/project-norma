import logout from "./logout.js";

export default function Log() {
  const btnLogout = document.querySelector(".salir");
  const btnLogin = document.querySelector(".usuario");

  if (!localStorage.getItem("session")) {
    // No Session
    btnLogin.classList.remove("hidden");
    btnLogout.classList.add("hidden");

    btnLogin.addEventListener(
      "click",
      () => (window.location.href = "../html/login.html")
    );
  } else {
    //Session Opened
    console.log(localStorage.getItem("session"), btnLogin, btnLogout);
    btnLogin.classList.add("hidden");
    btnLogout.classList.remove("hidden");

    btnLogout.addEventListener("click", function () {
      Promise.resolve(logout()).then((data) => {
        if (data) {
          localStorage.removeItem("session");
          btnLogin.classList.remove("hidden");
          btnLogout.classList.add("hidden");
        }
      });
    });
  }
}
