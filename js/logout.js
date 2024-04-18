/* eslint-disable no-undef */
export default async function logout() {
  return await fetch("../php/logout.php")
    .then((res) => res.json())
    .then((data) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "session closed",
        showConfirmButton: false,
        timer: 1000,
      });
      return data;
    })
    .catch((err) => {
      console.error(err);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error no especificado",
        showConfirmButton: false,
        timer: 1000,
      });
    });
}
