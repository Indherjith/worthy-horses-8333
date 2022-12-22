const {Router} = require("express");
const {authentication} = require("../middlewares/authentification")
const {getKidProducts,getKidProductById,postKidProducts,patchKidProducts, deleteKidProducts} = require("../controller/kids.controller")

const kidRouter = Router();

kidRouter.get("/",getKidProducts);

kidRouter.get("/:kidId",getKidProductById);

kidRouter.post("/addKidProduct",authentication,postKidProducts);
kidRouter.patch("/updateKidProduct/:productId",authentication,patchKidProducts);
kidRouter.delete("/deleteKidProduct/:productId",authentication,deleteKidProducts);


module.exports = {kidRouter};