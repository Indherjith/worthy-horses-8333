const {Router} = require("express");

const {authentication} = require("../middlewares/authentification")
const {getBeautyProducts,getBeautyProductById,postBeautyProducts, patchBeautyProducts, deleteBeautyProducts} = require("../controller/beauty.controller")

const beautyRouter = Router();

beautyRouter.get("/",getBeautyProducts);

beautyRouter.get("/:beautyId",getBeautyProductById);

beautyRouter.post("/addBeautyProduct",authentication,postBeautyProducts);

beautyRouter.patch("/updateBeautyProduct/:productId",authentication,patchBeautyProducts);

beautyRouter.delete("/deleteBeautyProduct/:productId",authentication,deleteBeautyProducts);

module.exports = {beautyRouter};