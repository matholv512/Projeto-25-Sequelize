const Advogados = require("../models/advogadosModels");

module.exports = {
  async indexAll(req, res) {
    const advogados = await Advogados.findAll();
    return res.json(advogados);
  },

  async index(req, res) {
    const { advogado_id } = req.params;
    console.log("Parâmetro advogado esperado " + advogado_id);
    const advogados = await Advogados.findByPk(advogado_id);
    return res.json(advogados);
  },

  async store(req, res) {
    const { adv_nome, adv_sexo, adv_email, adv_telefone } = req.body;
    const advogado = await Advogados.create({
      adv_nome,
      adv_sexo,
      adv_email,
      adv_telefone,
    });
    return res.status(200).send({
      status: 1,
      message: "Advogado cadastrado com sucesso!",
      advogado,
    });
  },

  async update(req, res) {
    const { advogado_id } = req.params;
    const { adv_nome, adv_sexo, adv_email, adv_telefone } = req.body;
    await Advogados.update(
      {
        adv_nome,
        adv_sexo,
        adv_email,
        adv_telefone,
      },
      {
        where: {
          id: advogado_id,
        },
      }
    );
    return res.status(200).send({
      status: 1,
      message: "Advogado atualizado com sucesso!",
    });
  },

  async delete(req, res) {
    const { advogado_id } = req.params;
    const advogado = await Advogados.findByPk(advogado_id);
    if (!advogado) {
      return res.status(400).json({ error: "Advogado não encontrado!" });
    } else {
      console.log("Advogado encontrado!");
    }
    await Advogados.destroy({
      where: {
        id: advogado_id,
      },
    });
  },
};
