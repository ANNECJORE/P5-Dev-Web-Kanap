// const contenu = document.getElementbyId("cart__item");
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then(async function (recup) {
    catalogCanape = await recup;
    console.log(recup);
    allCatalogCanape(catalogCanape);
  });

// function contenuPanier() {
//   let choixPanier = [];
//   if (localStorage.getItem("selection")  === 0) {
//     alert('votre panier est vide');

//     if choixPanier = JSON.parse(localStorage.getItem("selection"));

//     console.log(choixPanier);
//   }
//   // alert("coucou");
// }

let contenuPanier = JSON.parse(localStorage.getItem("selection"));
//panier vide
if ((contenuPanier == 0, (contenuPanier.length = 0))) {
  document.querySelector("h1").innerHTML += "votre panier est vide";
} else {
  document.querySelector("h1").innerHTML += "votre panier";
}

function articleEssai(produit) {
  const article = document.creatElement("article");
  article.classList.add("cart__item");
  article.dataset.id = produit.id;
  article.datacolor.id = produit.color;
  article.appendChild("cart__item");
  return article;
}
document.getElementsByClassName("cart__items").appendChild(article);
// let descript = document.creatElement("p");
//créer l'image
function imageEssai(choixPanier) {
  const div = document.creatElement("div");
  div.classList.add("art__item__img");
  image.appendChild(article);
  image.src = choixPanier.imageUrl;
  image.alt = choixPanier.altTxt;
  const image = document.creatElement("img");
  return image;
}
const contentImage = document.creatElement("cart__content__img");

function panierChoisi(div, detailCanape) {
  const detailCanape = document.creatElement("div");
  detailCanape.classList.add("cart__item__content__description");

  const nomCanape = document.creatElement("h2");
  nomCanape.textContent = produit.name;
  const couleurChoix = document.creatElement("p");
  couleurChoix.textContent = produit.colors;
  const prixTotal = document.creatElement("p");
  prixTotal.textContent = produit.price + " €";

  detailCanape.appendChild(nomCanape);
  detailCanape.appendChild(couleurChoix);
  detailCanape.appendChild(prixTotal);
  div.appendChild(detailCanape);
}

prixTotal.appendChild("h2");

// nombre de canapés

const combienCanape = document.creatElement("div");
combienCanape.classList.add("cart__item__content__settings__quantity");
const totalChoix = document.creatElement("p");
totalChoix.textContent = "Qté : ";
combienCanape.appendChild(totalChoix);

nbCanape.textContent = produit.combienCanape;

const input = document.createElement("input");
combienCanape.appendChild(input);

// bouton
input.type = "number";
input.classList.add("itemQuantity");
input.name = itemQuantity;
input.value = produit.combienCanape;
input.min = 1;
input.max = 100;

// enlever des produits
const retirer = document.creatElement("div");
retirer.classList.add("cart__item__content__settings__delete");
const oter = document.createElement("p");
oter.textContent = "supprimer";
retirer.appendChild("oter");

// function panierRempli(produit) {
//   const nbCanape = document.getElementById("totalQuantity");

//   const panierVide = produit[0];
//   const panierPlein = panierVide.combienCanape * panierVide.price;
// }
function panierRempli(produit) {
  let total = 0;
  const factureTotal = document.getElementById("totalPrice");
  cart.forEach((produit) => {
    const prixTotal = produit.price * produit.combienCanape;
    prixTotal += total;
    factureTotal.textContent = prixTotal;
  });
}
