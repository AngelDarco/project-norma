/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import updateFunctions from "./updateFunctions.js";

document.addEventListener("DOMContentLoaded", () => {
  // Card values to display //Class
  const cardValues = [
    "nombreCard",
    "tallaCard",
    "precioCard",
    "stockCard",
    "generoCard",
    "descripcionCard",
    "imgFront",
    "imgBack",
    "cardColores",
    "cardCode",
  ];

  const [
    nombreCard,
    tallaCard,
    precioCard,
    stockCard,
    generoCard,
    descripcionCard,
    imgFront,
    imgBack,
    cardColores,
    cardCode,
  ] = cardValues.map((item) => document.querySelector(`.${item}`));

  // Form values and actions buttons //ID
  const formValues = [
    "producto",
    "talla",
    "precio",
    "stock",
    "genero",
    "descripcionForm",
    "buscar",
    "code",
    "resetForm",
    "imagenFile",
    "regForm",
  ];

  const [
    producto,
    talla,
    precio,
    stock,
    genero,
    descripcionForm,
    buscar,
    code,
    resetForm,
    imagenFile,
    regForm,
  ] = formValues.map((item) => document.querySelector(`#${item}`));

  const {
    resetear,
    converter,
    updateValues,
    formButtonsAvalibyle,
    watchcolors,
    updateColors,
  } = updateFunctions({
    cardColores,
    code,
    producto,
    talla,
    precio,
    stock,
    genero,
    descripcionForm,
    imgFront,
    imgBack,
    imagenFile,
  });

  formButtonsAvalibyle(true);
  watchcolors();

  imagenFile.addEventListener("change", async (e) => {
    const blobImg = await converter(e.target.files[0]);
    imgFront.setAttribute("src", `${blobImg}`);
    imgBack.setAttribute("src", `${blobImg}`);
  });

  /* search product in the database */
  buscar.addEventListener("click", async () => {
    const datos = new FormData();
    datos.append("code", code.value);
    datos.append("accion", "search");

    await fetch("../php/productosUpdate.php", {
      method: "POST",
      body: datos,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data !== "NotFound" && data !== "Vacio") {
          resetear(regForm);
          updateValues(data, {
            nombreCard,
            tallaCard,
            precioCard,
            stockCard,
            generoCard,
            descripcionCard,
            imgFront,
            imgBack,
            cardColores,
            cardCode,
          });
          formButtonsAvalibyle(false);
        } else if (data === "NotFound") {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Producto no Encontrado",
            showConfirmButton: false,
            timer: 1500,
          });
          if (regForm) {
            formButtonsAvalibyle(true);
          }
        } else if (data === "Vacio") {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Debes llenar la casilla Primero",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error no especificado",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Error En la BBDD ${err}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  });

  /* update values in the database */
  regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const colors = updateColors();
    const formData = new FormData(regForm);
    formData.append("colores", colors);
    formData.append("code", code.value);
    formData.append("accion", "update");

    fetch("../php/productosUpdate.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "Vacio") {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Por Favor Rellena Todos los Campos",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (data === "Actualizado") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto Actualizado Satisfactoriamente",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (data === "NoActualizado") {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Nada Actualizado",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Lo Sentimos Hubo un Error en el Servidor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Error no Especificado ${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  });

  // resetForm values
  resetForm.addEventListener("click", () => resetear(regForm));
});
