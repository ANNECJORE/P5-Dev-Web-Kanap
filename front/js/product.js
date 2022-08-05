//mise en place de la page produit

const str = window.location.href;
const url = new URL(str);
const productId = url.searchParams.get("id");
const prix = document.querySelector("#price");
const couleur = document.querySelector("#colors");
const nom = document.querySelector("#title");
const descript = document.getElementById("description");
// const zoneimage = document.querySelector(".item__img");
const zoneimage = document.createElement("img");


fetch("http://localhost:3000/api/products/" + productId)
  .then((response) => response.json())
  .then(async function (produit) {
    nom.innerText = produit.name;
    console.log(pro duit.name);
    // zoneimage.innerHTML =
    // <img src="${produit.imageUrl}" alt= image de meuble "${produit.altTxt}" />
    // )
    // // produit.item__img.forEach();
 
    let photo = document.getElementsByClassName("item__img");
    photo.appendChild(zoneimage);
    zoneimage.src = produit.imageUrl;
    // photo.appendChild(zoneimage);
    zoneimage.alt = produit.altTxt;
    // zonetext.appendChild(zoneimage);
    console.log(produit.imageUrl);
    console.log(produit.altTxt);

    prix.innerHTML = produit.price;
    descript.innerHTML = produit.description;
    produit.colors.forEach((color) => {
      let option = document.createElement("option");
      option.value = color;
      option.text = color;
      couleur.appendChild(option);
    });
    console.log(produit.colors);
  });

// panier
let couleur = localStorage.getItem("colors");

// récuperer élément du formulaire
const envoyer= document.getElementsById("addToCart")
document.querySelector("#addToCart").addEventListener("click", (e) => {
  e.preventDedault();
});
