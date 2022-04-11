const Processos = require("../models/processosModels");
const Advogados = require("../models/advogadosModels");
const { update } = require("./advogadosControllers.js");

module.exports = {
  async indexAll(req, res) {
    const processos = await Processos.findAll();
    return res.json(processos);
  },

  async index(req, res) {
    const { advogado_id } = req.params;
    console.log("Parametro processos esperado " + advogado_id);

    const processos = await Advogados.findByPk(advogado_id, {
      include: {
        association: "advogado",
      },
    });

    return res.json(processos);
  },

  async store(req, res) {
    const { advogado_id } = req.params;
    const {
      proc_codigo,
      proc_assunto,
      proc_tribunal,
      proc_segredo_de_justiça,
    } = req.body;

    console.log("Parametro esperado: " + advogado_id);
    console.log("Dados: " + req.body);

    const advogado = await Advogados.findByPk(advogado_id);

    if (!advogado) {
      return res.status(400).json({
        error: "Advogado não encontrado!",
      });
    }
    const processos = await Processos.create({
      advogado_id,
      proc_codigo,
      proc_assunto,
      proc_tribunal,
      proc_segredo_de_justiça,
    });

    return res.json(processos);
  },

  async update(req, res) {
    const { processos_id } = req.params;
    const {
      advogado_id,
      proc_codigo,
      proc_assunto,
      proc_tribunal,
      proc_segredo_de_justiça,
    } = req.body;

    await Processos.update(
      {
        advogado_id,
        proc_codigo,
        proc_assunto,
        proc_tribunal,
        proc_segredo_de_justiça,
      },
      {
        where: {
          id: processos_id,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Processos atualizados com sucesso!",
    });
  },

  async delete(req, res) {
    const { processos_id } = req.params;

    const processos = await Processos.findByPk(processos_id);
    if (!processos) {
      return res.status(400).json({ error: "Processo não encontrado!" });
    } else {
      console.log("Processo encontrado!");
    }

    await Processos.destroy({
      where: {
        id: processos_id,
      },
    });

    return res.status(200).send({
      status: 1,
      message: "Processos deletados com sucesso!",
      processos,
    });
  },
};
