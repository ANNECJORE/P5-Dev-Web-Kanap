const str = window.location.href;
const url = new URL(str);
const productId = url.searchParams.get("id");
const prix = document.querySelector("#price");
const couleur = document.querySelector("#colors");
const nom = document.querySelector("#title");
const descript = document.getElementById("description");
//const zoneimage = document.querySelector(".item__img");

fetch("http://localhost:3000/api/products/" + productId)
  .then((response) => response.json())
  .then(async function (produit) {
    nom.innerText = produit.name;
    //console.log(produit.name);

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
