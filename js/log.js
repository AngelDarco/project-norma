import logout from "./logout.js";

export default function Log() {
  const btnLogout = document.querySelector(".salir");
  const btnLogin = document.querySelector(".usuario");

  if (!localStorage.getItem("session")) {
    // No Session
    btnLogin.classList.remove("hiden");
    btnLogout.classList.add("hiden");

    btnLogin.addEventListener(
      "click",
      () => (window.location.href = "../html/login.html")
    );
  } else {
    //Session Opened
    btnLogin.classList.add("hiden");
    btnLogout.classList.remove("hiden");

    btnLogout.addEventListener("click", function () {
      Promise.resolve(logout()).then((data) => {
        if (data) {
          localStorage.removeItem("session");
          btnLogin.classList.remove("hiden");
          btnLogout.classList.add("hiden");
        }
      });
    });
  }
}
