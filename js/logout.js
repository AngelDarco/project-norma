export default async function logout() {
  return await fetch("../php/logout.php")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "session closed",
        showConfirmButton: false,
        timer: 1000,
      });
      return data;
    })
    .catch((err) => console.log(err));
}
