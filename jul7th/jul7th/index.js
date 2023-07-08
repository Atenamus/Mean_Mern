const SButton = document.getElementById("show_image");
const DButton = document.getElementById("dont_show_image");
const Empty = document.getElementById("empty_div");

const arr = [1, 2, 3, 4, 5];

// const data = [
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL480_FMwebp_QL65_.jpg",
//     title: "One Plus Nord",
//     rating: "5/5",
//     price: "1000 rs.",
//   },
// ];

// arr.map((el) => {
//   console.log(el);
// });

// map;
// forEach;
// reduce;
// filter;
// sort;
// find;

// SButton.addEventListener("click", function () {
//   const div = document.createElement("div");
//   div.id = "child_div";
//   const image = document.createElement("img");
//   image.src =
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F443446%2Fpexels-photo-443446.jpeg%3Fcs%3Dsrgb%26dl%3Ddaylight-forest-glossy-443446.jpg%26fm%3Djpg&f=1&nofb=1&ipt=d91137041936a3e664cb4073ca89ec5b57a96838d544f8a8c1928a002eb39475&ipo=images";
//   image.alt = "error";
//   const para = document.createElement("p");
//   para.innerText = "Hellow World!";
//   div.append(image, para);
//   Empty.append(div);
//   Empty.style.display = "block";
// });

// DButton.addEventListener("click", function () {
//   Empty.style.display = "none";
//   //   window.location.reload();
// });

// SButton.addEventListener("click", () => {
//   data.forEach((el) => {
//     const div = document.createElement("div");
//     const image = document.createElement("img");
//     image.src = el.image;
//     image.alt = "error";
//     const title = document.createElement("h2");
//     title.innerText = el.title;
//     const ratings = document.createElement("p");
//     ratings.innerText = el.rating;
//     const price = document.createElement("h4");
//     price.innerText = el.price;
//     div.append(image, title, ratings, price);
//     Empty.append(div);
//   });
// });

const token = JSON.parse(localStorage.getItem("token"));
console.log(token);
if (token !== null) {
  const data_div = document.getElementById("data_div");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      data.map((el) => {
        const div = document.createElement("div");
        const title = document.createElement("h1");
        title.innerText = el.title;
        const desc = document.createElement("p");
        desc.innerText = el.body;
        div.append(title, desc);
        data_div.append(div);
      });
    });
} else {
  window.location.href = "./signin.html";
}
