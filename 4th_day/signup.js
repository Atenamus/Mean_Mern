const uname=document.getElementById("name");
const email=document.getElementById("email");
const pass=document.getElementById("password");
const but=document.getElementById("signup");
but.addEventListener("click",()=>{
    const data={
        email:email.value,
        name:uname.value,
        password:pass.value,
    };
    fetch("http://localhost:8080/users",{
        method:"POST",
        
    });
});