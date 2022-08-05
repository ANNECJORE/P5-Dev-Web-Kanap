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
const photo = document.querySelector(".item__img");
const qte = document.querySelector("#quantity");

fetch("http://localhost:3000/api/products/" + productId)
  .then((response) => response.json())
  .then(async function (produit) {
    nom.innerText = produit.name;

    photo.appendChild(zoneimage);
    zoneimage.src = produit.imageUrl;
    zoneimage.alt = produit.altTxt;

    prix.innerHTML = produit.price;
    descript.innerHTML = produit.description;
    produit.colors.forEach((color) => {
      let option = document.createElement("option");
      option.value = color;
      option.text = color;
      couleur.appendChild(option);
    });
  });

// panier
console.log(localStorage);
let choixPanier = JSON.parse(localStorage.getItem("selection"));

if (!choixPanier) {
  //  localStorage.setItem("selection", []);
  choixPanier = [];
}

// récuperer élément du formulaire
const envoyer = document.getElementById("addToCart");
envoyer.addEventListener("click", (e) => {
  let couleurSelec = couleur.value;
  let quantite = qte.value;
  let produitPanier = {
    couleur: couleurSelec,
    id: productId,
    quantite: quantite,
  };

  choixPanier.push(produitPanier);
  console.log(produitPanier);
  console.log(choixPanier);

  localStorage.setItem("selection", JSON.stringify(choixPanier));
});

//
