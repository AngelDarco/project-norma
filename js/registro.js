/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("formulario");

  form.addEventListener("submit", (e) => {
    let data = new FormData(form);
    e.preventDefault();

    fetch("../php/registro.php", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == "existente") {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "El Usuario ya esta registrado",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (data == "registrado") {
          Swal.fire({
            title: "Usuario Registrado",
            text: "Quieres iniciar Sesion!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Iniciar Sesion",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location = "../html/login.html";
            }
          });
          form.reset();
        } else if (data == "vacio") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Por favor llena todos los Campos",
            showConfirmButton: false,
            timer: 1500,
          });
        } else
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error no especificado",
            showConfirmButton: false,
            timer: 1500,
          });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error no especificado: " + err,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  });
});
