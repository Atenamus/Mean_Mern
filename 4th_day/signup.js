const uname = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const but = document.getElementById("signup");
but.addEventListener("click", () => {
  const dataobj = {
    email: email.value,
    name: uname.value,
    password: pass.value,
  };
  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
        alert("account created successfullly");
    });
});
