import { Testimonio } from "../models/Testimonios.js";
import { Viaje } from "../models/Viaje.js";
import { Sequelize } from "sequelize"




const paginaInicio = async (req, res) => { //req -> request, res -> response

    //Consultar 3 viajes del modelo viaje
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonio.findAll({limit: 3}))
    try {
        const resultado = await Promise.all(promiseDB)
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        })
    
    } catch(error) {
        console.error(error)

    }

   
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    //Consultar viajes 
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}
//*Muestra un viaje por su slug */
const paginaDetalleViaje = async (req, res) => {
   const { slug } = req.params;
   try {
    const viaje = await Viaje.findOne({ where: { slug }})

    res.render('viaje', {
        pagina: 'Informacion del viaje',
        viaje
    })

   } catch (error) {
    console.error(error)
   }
}

const paginaTestimonios = async (req, res) => {
    try {

        const testimonios = await Testimonio.findAll(/* {order: Sequelize.literal('rand()'), limit: 3 } */)
        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        })
        
    } catch (error) {
        console.error(error)
    }
   
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}