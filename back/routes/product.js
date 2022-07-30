const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

module.exports = router;

//  
// fetch('http://localhost:3000/api/products')
//     .then (response => response.json())
//    .then(async function (recup)
 
//      {
 
//     catalogCanape = await recup;
//     console.log(recup);
//     allCatalogCanape(catalogCanape)
// }) 
// function allCatalogCanape(listCanap) {
// listCanap.forEach ((canape) => {
//     let prix = document.createElement("price");
//   
// });
// }

