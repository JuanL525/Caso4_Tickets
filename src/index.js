import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

import usuarioRoutes from './routes/usuarioRoutes.js';
import tecnicoRoutes from './routes/tecnicoRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';

const app = express();

const whitelist = [ 'http://127.0.0.1:5501', 'http://localhost:5501', 'http://127.0.0.1:4000', 'http://localhost:4000' ];

const corsOptions = {
    origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
        callback(null, true);
    } else {
        callback(new Error('No permitido por CORS'));
    }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());

dotenv.config();

conectarDB();

//Rutas
app.use('/api/usuarios/', usuarioRoutes);
app.use('/api/tecnicos', tecnicoRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/tickets', ticketRoutes);

const PORT= process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});