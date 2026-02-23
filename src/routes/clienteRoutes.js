import express from 'express';
import checkAuth from '../middleware/checkAuth.js';

import {
    agregarCliente,
    verClientes,
    verCliente,
    actualizarCliente,
    eliminarCliente
} from '../controllers/clienteController.js'

const router = express.Router();

router
    .route("/")
    .post(checkAuth, agregarCliente)
    .get(checkAuth, verClientes)

router
    .route("/:id")
    .get(checkAuth, verCliente)
    .put(checkAuth, actualizarCliente)
    .delete(checkAuth, eliminarCliente)

export default router;