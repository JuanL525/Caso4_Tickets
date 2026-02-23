import express from 'express';
import checkAuth from '../middleware/checkAuth.js'

import{
    agregarTecnico,
    verTecnicos,
    verTecnico,
    actualizarTecnico,
    eliminarTecnico
} from '../controllers/tecnicoController.js';

const router = express.Router();

router
    .route('/')
    .post(checkAuth, agregarTecnico)
    .get(checkAuth, verTecnicos)

router
    .route('/:id')
    .get(checkAuth, verTecnico)
    .put(checkAuth, actualizarTecnico)
    .delete(checkAuth, eliminarTecnico)

export default router;