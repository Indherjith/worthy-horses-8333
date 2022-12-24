const {Router} = require("express");
const {authentication} = require("../middlewares/authentification")
const {getKidProducts,getKidProductById,postKidProducts,patchKidProducts, deleteKidProducts} = require("../controller/kids.controller")

const kidRouter = Router();

kidRouter.get("/",getKidProducts);
// authenticating as the users and administrators

kidRouter.get("/:kidId",getKidProductById);

// added edit route or delete route in kid api 

kidRouter.post("/addKidProduct",authentication,postKidProducts);
kidRouter.patch("/updateKidProduct/:productId",authentication,patchKidProducts);
kidRouter.delete("/deleteKidProduct/:productId",authentication,deleteKidProducts);


module.exports = {kidRouter};