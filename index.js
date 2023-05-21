import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

//Definir puerto
const port = process.env.PORT || 4000;

//Usando la carpeta public para los assets
app.use(express.static('public'));

//Habilitar pug
app.set('view engine', 'pug');

//Obtener el anio actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.NombreSitio = 'Agencia de Viajes'
    return next();
})
//Agregar body parser 

app.use(express.urlencoded({extended: true}))

//Definiendo la raiz
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})