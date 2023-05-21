import express from "express";
import { 
    paginaInicio,
    paginaNosotros,
    paginaTestimonios, 
    paginaViajes, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js'

import {guardarTestimonio} from "../controllers/testimonioController.js";

const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/testimonios', paginaTestimonios)


router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)

router.post('/testimonios', guardarTestimonio)

export default router;