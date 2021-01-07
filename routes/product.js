const express= require('express');
const router= express.Router();

const {create, read, productById, remove, update, list, listRelated, listCategories, listBySearch, photo} = require("../controllers/product");
const { userById } = require("../controllers/user");
const {requireSignin, isAuth, isAdmin} = require("../controllers/auth");


router.post("/product/create/:userId", 
requireSignin, 
isAuth, 
isAdmin,
create
);
router.get("/product/:productId", read);
router.delete("/product/create/:userId", requireSignin, isAuth, isAdmin, remove);
router.put("/product/:productId/:userId", requireSignin, isAuth, isAdmin, update);
router.get("/products", list);
router.get("/products/realted/c", listRelated);
router.get("/products/category", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);





router.param('userId', userById);
router.param('productId', productById);


module.exports = router;