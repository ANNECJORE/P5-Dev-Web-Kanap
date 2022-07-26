 
 
const items = document.querySelector('.items');
 
fetch('http://localhost:3000/api/products')
    .then (response => response.json())
   .then(async function (recup)
//    .then(data) =>
     {
// let image =document.createElement("img");
// img.src = data.imageUrl;

    catalogCanape = await recup;
    console.log(recup);
    allCatalogCanape(catalogCanape)
}) 

function allCatalogCanape(listCanap) {
  listCanap.forEach((canape) => {
  
  let lien = document.createElement ("a");
  
  let article = document.createElement ("article");
   let image = document.createElement ("img");
//  img.src=canape."imageUrl";
//img.alt=canape.altTxt;
  let nom = document.createElement ("h3");
    nom.textContent=canape.name;
    nom.className = "productName";
 
//  //   let descript = document.createElement("productDescription")
//   let descript = document.createElement ("p");
//    descript.textContent=canape.description;
//      descript.className = "productDescription";
// console.log(descript);//



    items.appendChild(lien);
    lien.appendChild (article);
    article.appendChild (image);
    article.appendChild(nom);
//  article.appenChild(p);
  });  
} 

 

// .then (function(data){
//        console.log(data);
  //  }
    //);

 
 
 