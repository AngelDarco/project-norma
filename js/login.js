/* eslint-disable no-undef */
function login() {
  const form = document.getElementById("formulario");
  if (form)
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      fetch("../php/login.php", {
        method: "POST",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data[0] == "true") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Session Iniciada",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
            localStorage.setItem("session", data[1] + "@", data[2]);
            setTimeout(() => {
              window.location = "../index.html";
            }, 1000);
          } else if (data == "false") {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "wrong credentials or no registred yet",
              showConfirmButton: false,
              timer: 1500,
            });
          } else if (data == "vacio") {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Llena todos los campos",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Error no Especificado",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error no Especificado" + err,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    });
}
login();
