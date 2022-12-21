const {Router} = require("express");
const {authentication} = require("../middlewares/authentification")
const {getShoesAndBagsProducts,getShoesAndBagsProductById,postShoesAndBagsProducts, patchShoesAndBagsProducts, deleteShoesAndBagsProducts} = require("../controller/shoes&bags.controller")

const ShoesAndBagsRouter = Router();

ShoesAndBagsRouter.get("/",getShoesAndBagsProducts);

ShoesAndBagsRouter.get("/:ShoesAndBagsId",getShoesAndBagsProductById);

ShoesAndBagsRouter.post("/addShoesAndBagsProduct",authentication,postShoesAndBagsProducts);
ShoesAndBagsRouter.patch("/updateShoesAndBagsProduct/:productId",authentication,patchShoesAndBagsProducts);
ShoesAndBagsRouter.delete("/deleteShoesAndBagsProduct/:productId",authentication,deleteShoesAndBagsProducts);

module.exports = {ShoesAndBagsRouter};