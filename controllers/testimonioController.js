import { Testimonio } from "../models/Testimonios.js";
const guardarTestimonio = async (req, res) => {
    
    //validar
    const {nombre, email, mensaje} = req.body
    const errores = []
    if (email.trim() === '') {
        errores.push({mensaje: 'El email esta vacio'})
    }
    if (nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'})
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    if (errores.length > 0) {
        //Mostrar vista con errores
        const testimonios = await Testimonio.findAll()

        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            email,
            mensaje,
            testimonios
        })
    } else {
        //Almacenarlo en la base de datos
        try {
            await Testimonio.create({
            nombre,
            email,
            mensaje
            });

            res.redirect('/testimonios')
            
        } catch (error) {
           console.error(error) 
        }
    }
  
}
export {
    guardarTestimonio,
   
} 