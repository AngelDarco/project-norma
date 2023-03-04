document.addEventListener("DOMContentLoaded", () => {
  let key;
  while (key != "1994") key = prompt("Ingrese su Contraseña");

  const resetImg = document.getElementById("c");
  const reset = document.getElementById("borrar");

  let form = document.getElementById("regForm");
  let card = document.querySelector(".img");
  let card2 = document.querySelector(".img2");
  let spancolor = document.querySelector(".colores");
  let span = document.querySelectorAll(".for-span");
  let colores = [];

  let producto = document.getElementById("nombre");
  let talla = document.getElementById("talla");
  let precio = document.getElementById("precio");
  let stock = document.getElementById("stock");
  let genero = document.getElementById("genero");
  let descripcion = document.getElementById("descripcion");

  producto.addEventListener(
    "blur",
    () => (document.querySelector(".nombre").innerHTML = producto.value)
  );
  talla.addEventListener(
    "blur",
    () =>
      (document.querySelector(".talla").innerHTML = talla.value.toUpperCase())
  );
  precio.addEventListener(
    "blur",
    () => (document.querySelector(".precio").innerHTML = precio.value)
  );
  stock.addEventListener(
    "blur",
    () => (document.querySelector(".stock").innerHTML = stock.value)
  );
  genero.addEventListener(
    "blur",
    () => (document.querySelector(".genero").innerHTML = genero.value)
  );

  descripcion.addEventListener("blur", () => {
    document.querySelector(".span-descripcion").innerHTML = descripcion.value;
  });

  let img = document.getElementById("imagen");
  img.addEventListener("blur", function (e) {
    card.setAttribute("src", `${img.value}`);
    card2.setAttribute("src", `${img.value}`);
  });

  let color = document.getElementsByName("horns");
  color.forEach((item) => {
    item.addEventListener("blur", (e) => {
      if (item.checked) {
        if (!colores.includes(item.value)) {
          colores.push(item.value);
        } else return;
        spancolor.innerHTML += `<span class='color label ${item.value}'></span>`;
      }
      if (item.checked == false) {
        let colorDelete = colores.indexOf(item.value);
        colores.splice(colorDelete, 1);
        if (spancolor.hasChildNodes) {
          let child = document.querySelector(`.for-span .${item.value}`);
          child.remove();
        }
      }
    });
  });

  form.addEventListener("submit", (e) => {
    let data = new FormData(form);
    e.preventDefault();
    data.append("colores", colores);
    fetch("/php/productosAdd.php", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data == "Vacio") {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Por Favor Rellena Todos los Campos",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (data == "Agregado") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto Agregado Satisfactoriamente",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          span.forEach((item) => {
            item.innerHTML = "";
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
          title: "Error no Especificado " + error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  });

  resetImg.addEventListener("click", () => {
    imagen.value = "";
  });

  reset.addEventListener("click", () => {
    form.reset();
    colores = [];
    while (spancolor.firstChild) {
      spancolor.removeChild(spancolor.firstChild);
    }
  });
});
