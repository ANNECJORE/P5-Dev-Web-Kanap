let contenuPanier = JSON.parse(localStorage.getItem("selection"));
//panier vide
if (contenuPanier.length === 0) {
  document.querySelector("h1").innerHTML += " est vide";
} else {
  // document.querySelector("h1").innerHTML = "Votre panier ";

  panierAfficher();
  panierTotal();
}

// calcul et affichage du prix total
function panierTotal() {
  let prixTotal = 0;
  let qteTotal = 0;
  const factureTotal = document.getElementById("totalPrice");
  const articleTotal = document.getElementById("totalQuantity");
  contenuPanier.forEach((produit) => {
    fetch("http://localhost:3000/api/products/" + produit.id)
      .then((response) => response.json())
      .then(async function (recupInfoProduit) {
        recupProduit = await recupInfoProduit;
        console.log(recupProduit);
      });
    prixTotal += recupProduit.price * produit.quantite;
    qteTotal += produit.quantite;
    factureTotal.textContent = prixtotal;
    articleTotal.textContent = qteTotal;
  });
}

function panierAfficher() {
  const contenu = document.querySelector("#cart__items");
  contenuPanier.forEach((produit) => {
    let recupProduit;
    // récupération des information du produit dans l'API
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
        divImg.className.add("art__item__img");
        // création de l'image
        const image = document.createElement("img");
        image.src = recupProduit.imageUrl;
        image.alt = recupProduit.altTxt;

        // création de la div qui contient les info produit
        const panierContenu = document.createElement("div");
        panierContenu.className = "cart__item__content";

        // création de la div qui contient la description du produit
        const detailCanape = document.createElement("div");
        detailCanape.className.add("cart__item__content__description");

        // elément de la description produit
        const nomCanape = document.createElement("h2");
        nomCanape.textContent = recupProduit.name;
        const couleurChoix = document.createElement("p");
        couleurChoix.textContent = produit.couleur;
        const prix = document.createElement("p");
        prix.textContent = recupProduit.price + " €";

        // création de la div qui contient la quatité et les boutons d'action
        const divSetting = document.createElement("div");
        divSetting.className.add("cart__item__content__settings");

        // création de la quatité
        const combienCanape = document.createElement("div");
        combienCanape.className.add("cart__item__content__settings__quantity");
        const totalChoix = document.createElement("p");
        totalChoix.textContent = "Qté : ";
        const input = document.createElement("input");
        input.type = "number";
        input.classList.add("itemQuantity");
        input.name = "itemQuantity";
        input.value = produit.quantite;
        input.min = 1;
        input.max = 100;

        const retirer = document.createElement("div");
        retirer.className.add("cart__item__content__settings__delete");
        const oter = document.createElement("p");
        oter.textContent = "supprimer";

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

function onRetireTrucs() {}
