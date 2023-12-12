const express = require("express");
const router = express.Router();


const {

    irCalcularDimensiones,
    iracalcular,
    irabout
    irparametros,
    irResultados

}= require("../controllers/principal.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.get("/principal/calculardimensiones", irCalcularDimensiones);
router.get("/about", isAuthenticated,irabout);

router.post("/principal/iracalcular", isAuthenticated, iracalcular);

module.exports = router;