// const button=document.getElementById("mybutton");
// const Empty=document.getElementById("empty_div");
// const data=[
//     {
//         image:"https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL400_.jpg",
//         title:"one plus",
//         rating:"5/5",
//         price:"2000",
//     },
//     {
//         image:"https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL400_.jpg",
//         title:"one plus",
//         rating:"5/5",
//         price:"2000",
//     },
//     {
//         image:"https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL400_.jpg",
//         title:"one plus",
//         rating:"5/5",
//         price:"2000",
//     },
// ];
// button.addEventListener("click",function(){
//     const div=document.createElement("div");
//     div.id="child_div";
//     const img=document.createElement("img");
//     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-3382ZgdUhzsOz0VYE8KVNtX_HTwTxRSps08Nli1&s";
//     img.alt="error";
//     const para=document.createElement("")
//     div.append(img);
//     Empty.append(div);
//     Empty.style.display="block";
// });
// button.addEventListener("click",()=>{
//     data.map((el)=>{
//         const div=document.createElement("div");
//         const image=document.createElement("img");
//         image.src=el.image;
//         image.alt="error";
//         const title=document.createElement("h2");
//         title.innerText=el.title;
//         const rating=document.createElement("p");
//         rating.innerText=el.rating;
//         const price=document.createElement("h4");
//         price.innerText=el.price;
//         div.append(image,title,rating,price);
//         Empty.append(div);
//     })
// })
const token=JSON.parse(localStorage.getItem("token"));;
console.log(token);
if(token!=null){
    
}
const data_div = document.getElementById("data");
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
      const div = document.createElement("div");
      const title = document.createElement("h1");
      title.innerText = el.title;
      const para = document.createElement("p");
      para.innerText = el.body;
      div.append(title, para);
      data_div.append(div);
    });
  });
