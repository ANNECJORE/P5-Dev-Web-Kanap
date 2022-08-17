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
//--- on transforme le produit en JSON pour que le localstorage le comprenne --
console.log(localStorage);

const envoyer = document.getElementById("addToCart");

envoyer.addEventListener("click", (e) => {
  let couleurSelec = couleur.value;
  let quantite = qte.value;

  if (couleurSelec && quantite > 0 && quantite < 101) {
    // permet de recupérer panier
    let choixPanier = JSON.parse(localStorage.getItem("selection"));
    let doublon;
    if (!choixPanier) {
      choixPanier = [];

      localStorage.setItem("selection", JSON.stringify(choixPanier));
    } else {
      doublon = choixPanier.find(
        (element) =>
          element.id === productId && element.couleur === couleurSelec
      );
    }
    if (doublon) {
      doublon.quantite = parseInt(quantite) + parseInt(doublon.quantite);
    } else {
      let produitPanier = {
        couleur: couleurSelec,
        id: productId,
        quantite: quantite,
      };
      choixPanier.push(produitPanier);
    }

    localStorage.setItem("selection", JSON.stringify(choixPanier));

    alert("produit ajouté au panier");
  } else {
    alert("attention quantité ou couleur non sélectionnée");
  }
});
