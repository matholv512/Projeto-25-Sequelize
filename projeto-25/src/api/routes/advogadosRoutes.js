const express = require("express");
const router = express.Router();

const advogadosControllers = require("../controllers/advogadosControllers");

router.get("/advogados", advogadosControllers.indexAll);

router.post("/advogados", advogadosControllers.store);

router.get("/advogados/:advogado_id", advogadosControllers.index);

router.put("/advogados/:advogado_id", advogadosControllers.update);

router.delete("/advogados/:advogado_id", advogadosControllers.delete);

module.exports = router;
