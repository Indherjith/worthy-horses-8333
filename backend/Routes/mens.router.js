const {Router} = require("express");
const {authentication} = require("../middlewares/authentification")
const {getMenProducts,getMenProductById,postMenProducts, patchMenProducts, deleteMenProducts} = require("../controller/mens.controller")

const menRouter = Router();

menRouter.get("/",getMenProducts);
// authenticating as the users and administrators
menRouter.get("/:menId",getMenProductById);
// added edit route or delete route in men api 
menRouter.post("/addMenProduct",authentication,postMenProducts);
menRouter.patch("/updateMenProduct/:productId",authentication,patchMenProducts);
menRouter.delete("/deleteMenProduct/:productId",authentication,deleteMenProducts);

module.exports = {menRouter};