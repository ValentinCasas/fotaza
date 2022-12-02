
const { Item, ListaItems, User } = require("../models");
const mysql = require("mysql2");

/* get '/' LISTO TODO ACA */
exports.listarItem = async function (req, res) {
    const users = await User.findAll({ where: { sessionId: req.sessionID } });
    const todoUsers = await User.findAll();
    const items = await Item.findAll({ where: { receptorId: users[0].id } });
    const listas = await ListaItems.findAll({ where: { userId: users[0].id } });

    res.render("todo", { items: items, listas: listas, users: users, todoUsers: todoUsers });
};

/* post '/' */
exports.agregarItem = async function (req, res) {

    const { titulo, fechaLimite, descripcion, prioridad, estado, receptor, idDuenio } = req.body;
    const tiempoTranscurrido = Date.now();
    const fechaCreacion = new Date(tiempoTranscurrido);
    fechaCreacion.toLocaleDateString()
    let fechaResolucion = "";

    if (estado == "resuelta") {
        fechaResolucion = fechaCreacion;
    } else {
        fechaResolucion = "0000-00-00";
    }

    await Item.create({
        titulo: titulo,
        fechaCreacion: fechaCreacion,
        fechaResolucion: fechaResolucion,
        fechaLimite: fechaLimite,
        descripcion: descripcion,
        prioridad: prioridad,
        estado: estado,
        receptorId: receptor,
        duenioId: idDuenio
    })

    res.redirect("todo");
};

/* delete "/item/:id" */
exports.borrarItem = async function (req, res) {
    Item.destroy({ where: { id: req.params.id } })
    res.redirect("/todo")

};

/*  get "/titulo/:id/editar" */
exports.irAEditar = async function (req, res) {
    const id = req.params.id;
    const items = await Item.findByPk(id, { include: ListaItems });
    res.render("editar", { id: id, item: items, });
};

/* put "/editar" */
exports.editarItem = async function (req, res) {
    const id = req.body.id;
    const estado = req.body.estado;
    const item = await Item.findByPk(id, { include: ListaItems });

    const tiempoTranscurrido = Date.now();
    const fechaResolucion = new Date(tiempoTranscurrido);
    fechaResolucion.toLocaleDateString()

    if (item.estado != 'resuelta') {
        if (estado == "resuelta") {
            result = await Item.update({ fechaResolucion }, { where: { id: id } });
        }
        result = await Item.update({ estado }, { where: { id: id } });
    } else {
        console.log("NO SE PUEDE EDITAR");
    }
    res.redirect("/todo");
};

