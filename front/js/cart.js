let contenuPanier = JSON.parse(localStorage.getItem("selection"));

//panier vide
if (contenuPanier.length === 0) {
  document.querySelector("h1").innerHTML += " Votre panier est vide";
} else {
  document.querySelector("h1").innerHTML = " Excellent choix !";
}
panierAfficher();
panierTotal();
// let recupProduit;
// calcul et affichage du prix total
function panierTotal() {
  let prixTotal = 0;
  let qteTotal = 0;
  const factureTotal = document.getElementById("totalPrice");
  const articleTotal = document.getElementById("totalQuantity");
  contenuPanier.forEach((produit) => {
    let recupInfoProduit;
    let fetchApi = async () => {
      await fetch("http://localhost:3000/api/products/" + produit.id)
        .then((response) => response.json())
        .then((newReponse) => (recupInfoProduit = newReponse));

      console.log(recupInfoProduit);

      prixTotal += recupInfoProduit.price * produit.quantite;
      qteTotal += parseInt(produit.quantite);
      factureTotal.textContent = prixTotal;
      articleTotal.textContent = qteTotal;
    };
    fetchApi();
  });
}

function panierAfficher() {
  const contenu = document.querySelector("#cart__items");
  contenuPanier.forEach((produit) => {
    let recupProduit;
    // récupération des informations du produit dans l'API
    fetch("http://localhost:3000/api/products/" + produit.id)
      .then((response) => response.json())
      .then(async function (recupInfoProduit) {
        recupProduit = await recupInfoProduit;

        console.log(recupProduit);
        // création de l'article qui contient toutes les informations du produit
        const article = document.createElement("article");
        article.className = "cart__item";
        article.dataset.id = produit.id;
        article.dataset.color = produit.couleur;

        // création de la div qui contient l'image
        const divImg = document.createElement("div");
        divImg.classList.add("cart__item__img");

        // création de l'image
        const image = document.createElement("img");

        image.src = recupProduit.imageUrl;
        image.alt = recupProduit.altTxt;
        // console.log(recupProduit.imageUrl);
        // création de la div qui contient les info produit
        const panierContenu = document.createElement("div");
        panierContenu.classList.add("cart__item__content");
        console.log("image canap :", recupProduit.imageUrl);
        // création de la div qui contient la description du produit
        const detailCanape = document.createElement("div");
        detailCanape.classList.add("cart__item__content__description");

        // elément de la description produit
        const nomCanape = document.createElement("h2");
        nomCanape.textContent = recupProduit.name;
        const couleurChoix = document.createElement("p");
        couleurChoix.textContent = produit.couleur;
        const prix = document.createElement("p");
        prix.textContent = recupProduit.price + " €";
        // console.log("image canap :", recupProduit.imageUrl);
        // création de la div qui contient la quatité et les boutons d'action
        const divSetting = document.createElement("div");
        divSetting.classList.add("cart__item__content__settings");

        // création de la quatité
        const combienCanape = document.createElement("div");
        combienCanape.classList.add("cart__item__content__settings__quantity");
        const totalChoix = document.createElement("p");
        totalChoix.textContent = "Qté : ";
        const input = document.createElement("input");
        input.type = "number";
        input.min = 1;
        input.max = 100;
        input.classList.add("itemQuantity");

        input.name = "itemQuantity";
        input.value = produit.quantite;
        // input.addEventListener('change', (event) =>{ changerTout(produit.id, input.value));
        // quantite.appendChild(input);
        //         function changerTout(id, choixNouveau) {
        // const nouveauChange= cart.find(produit) =>{ produit.id===id;
        // nouveauChange.quantite=  choixNouveau ;
        // localStorage.setItem("selection", JSON.stringify(produit));
        // }
        // panierAfficher();
        // panierTotal();

        // });

        const retirer = document.createElement("div");
        retirer.classList.add("cart__item__content__settings__delete");
        const oter = document.createElement("p");
        oter.textContent = "supprimer";

        oter.addEventListener("click", function () {
          // console.log(contenuPanier);
          let produitTrouve = contenuPanier.find(
            (element) =>
              produit.id == element.id && produit.couleur == element.couleur
          );
          contenuPanier = contenuPanier.filter((prod) => prod != produitTrouve);
          contenu.removeChild(article);
          localStorage.setItem("selection", JSON.stringify(contenuPanier));
          panierTotal();
        });

        //Ajout des éléments dans l'article
        article.appendChild(divImg);
        divImg.appendChild(image);
        article.appendChild(panierContenu);
        panierContenu.appendChild(detailCanape);
        detailCanape.appendChild(nomCanape);
        detailCanape.appendChild(couleurChoix);
        detailCanape.appendChild(prix);
        panierContenu.appendChild(divSetting);
        divSetting.appendChild(combienCanape);
        combienCanape.appendChild(totalChoix);
        combienCanape.appendChild(input);
        divSetting.appendChild(retirer);
        retirer.appendChild(oter);
        contenu.appendChild(article);
      });
  });
}

// on supprime des trucs
// function onRetireTrucs(produit, quantite) {
//   let choixPanier = getItem();
//   let calculModifPanier = choixPanier.find(
//     produit.id  == produit.id,
//     produit.couleur == produit.couleur, produit.quantite == produit.quantite
//   );

// if (calculModifPanier!= undefined) {
//   calculModifPanier.quantite+=quantite;
//   if(calculModifPanier.quantite<=0) {
//     removeonRetireTruc(calculModifPanier);
//   }
//   saveChoix(choixPanier);
// }

// // on supprime des trucs 2
// const removechoixPanier = async (choixPanier) => {
//   await choixPanier;
//   console.log("essai");
//  retirer.forEach(produit) => addEventListener("click",()=> {
// if {

// // }
// });
// }
