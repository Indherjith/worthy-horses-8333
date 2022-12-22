const {Router} = require("express");

const {getWomensProducts,getWomensProductById,postWomensProducts, patchWomensProducts, deleteWomensProducts} = require("../controller/womens.controller")
const {authentication} = require("../middlewares/authentification")
const womensRouter = Router();

womensRouter.get("/",getWomensProducts);

womensRouter.get("/:womensId",getWomensProductById);

womensRouter.post("/addwomensProduct",authentication,postWomensProducts);

womensRouter.patch("/updatewomensProduct/:productId",authentication,patchWomensProducts);

womensRouter.delete("/deletewomensProduct/:productId",authentication,deleteWomensProducts);

module.exports = {womensRouter};