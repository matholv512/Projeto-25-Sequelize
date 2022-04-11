const express = require("express");
const router = express.Router();

const processosControllers = require("../controllers/processosControllers");

router.get("/processos", processosControllers.indexAll);

router.post("/processos/:advogado_id", processosControllers.store);

router.get("/processos/:advogado_id", processosControllers.index);

router.put("/processos/:processos_id", processosControllers.update);

router.delete("/processos/:processos_id", processosControllers.delete);

module.exports = router;
