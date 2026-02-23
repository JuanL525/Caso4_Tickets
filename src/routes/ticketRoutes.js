import express from 'express';
import checkAuth from '../middleware/checkAuth.js';

import{
    agregarTicket,
    verTicket,
    verTickets,
    actualizarTicket,
    eliminarTicket
} from '../controllers/ticketController.js';

const router = express.Router();

router
    .route("/")
    .post(checkAuth, agregarTicket)
    .get(checkAuth, verTickets)

router
    .route("/:id")
    .get(checkAuth, verTicket)
    .put(checkAuth, actualizarTicket)
    .delete(checkAuth, eliminarTicket)

export default router;