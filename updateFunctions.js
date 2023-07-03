export default function updateFunctions(props) {
  const {
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
  } = props;

  let colors = [];
  const allColors = document.querySelectorAll('.color');

  // enable or disable buttons
  function formButtonsAvalibyle(value) {
    const actualizar = document.getElementById('actualizar');
    const checkbox = document.querySelectorAll('input[type="checkbox"]');

    producto.disabled = value;
    talla.disabled = value;
    precio.disabled = value;
    stock.disabled = value;
    genero.disabled = value;
    descripcionForm.disabled = value;
    actualizar.disabled = value;
    imagenFile.disabled = value;

    // eslint-disable-next-line no-param-reassign
    checkbox.forEach((c) => { c.disabled = value; });

    if (!actualizar.disabled) { actualizar.classList.add('greenButton'); } else { actualizar.classList.remove('greenButton'); }
  }

  // function to reset form and card values
  function resetear(form = false) {
    const cardInfo = document.getElementsByTagName('li');
    // reset card values
    if (form) {
      for (let i = 0; i < cardInfo.length; i++) {
        cardInfo[i].firstElementChild.innerHTML = '';
      }
      imgFront.src = '';
      imgBack.src = '';
      colors = [];

      // reset form values
      form.reset();

      // disable form values
      formButtonsAvalibyle(true);
    }
    if (cardColores) {
      while (cardColores.firstChild) {
        cardColores.removeChild(cardColores.firstChild);
      }
    }
  }

  // update card colors
  const updateCardColors = (arr) => {
    resetear();
    for (let i = 0; i < arr.length; i++) {
      const node = document.createElement('span');
      node.classList.add('color', 'label', arr[i]);
      if (cardColores) cardColores.appendChild(node);
    }
  };

  // update form colors
  const updateFormColors = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let ii = 0; ii < allColors.length; ii++) {
        if (arr[i] === allColors[ii].id) {
          allColors[ii].checked = true;
        }
      }
    }
  };

  function updateValues(data, cardValues) {
    const {
      cardCode,
      nombreCard,
      tallaCard,
      precioCard,
      stockCard,
      generoCard,
      descripcionCard,
    } = cardValues;
    const d = data[0];
    const arrColors = d.colores.split(',');
    colors = arrColors;
    resetear();

    code.value = d.codepro;
    producto.value = d.nombre;
    talla.value = d.talla;
    precio.value = d.precio;
    stock.value = d.stock;
    genero.value = d.genero;
    descripcionForm.value = d.descripcion;
    updateFormColors(arrColors);

    cardCode.innerHTML = d.codepro;
    nombreCard.innerHTML = d.nombre;
    tallaCard.innerHTML = d.talla;
    precioCard.innerHTML = d.precio;
    stockCard.innerHTML = d.stock;
    generoCard.innerHTML = d.genero;
    descripcionCard.innerHTML = d.descripcion;
    imgFront.src = `../${d.imagen}`;
    imgBack.src = `../${d.imagen}`;
    updateCardColors(arrColors);
  }

  function watchcolors() {
    // watch change colors
    allColors.forEach((color) => {
      color.addEventListener('change', () => {
        if (color.checked) {
          colors.push(color.value);
          updateCardColors(colors);
        } else {
          const id = colors.findIndex((c) => c === color.value);
          colors.splice(id, 1);
          updateCardColors(colors);
        }
      });
    });
    return colors;
  }

  /**  Input file to change image  */
  // convert image from blob to base64
  async function converter(blobImg) {
    // eslint-disable-next-line no-new
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blobImg);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  // return the new colors value
  function updateColors() {
    return colors;
  }

  return {
    resetear, updateValues, watchcolors, formButtonsAvalibyle, converter, updateColors,
  };
}
