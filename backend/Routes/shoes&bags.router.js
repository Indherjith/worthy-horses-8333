const {Router} = require("express");
const {authentication} = require("../middlewares/authentification")
const {getShoesAndBagsProducts,getShoesAndBagsProductById,postShoesAndBagsProducts, patchShoesAndBagsProducts, deleteShoesAndBagsProducts} = require("../controller/shoes&bags.controller")

const ShoesAndBagsRouter = Router();

ShoesAndBagsRouter.get("/",getShoesAndBagsProducts);
// authenticating as the users and administrators
ShoesAndBagsRouter.get("/:ShoesAndBagsId",getShoesAndBagsProductById);
// added edit route or delete route in addShoesAndBags api 
ShoesAndBagsRouter.post("/addShoesAndBagsProduct",authentication,postShoesAndBagsProducts);
ShoesAndBagsRouter.patch("/updateShoesAndBagsProduct/:productId",authentication,patchShoesAndBagsProducts);
ShoesAndBagsRouter.delete("/deleteShoesAndBagsProduct/:productId",authentication,deleteShoesAndBagsProducts);

module.exports = {ShoesAndBagsRouter};