// PASO 1: Crear una constante llamada express y requerir el modulo express
const express = require('express')
const fs = require('fs')



const express = require("express");



// PASO 2: Ejecución de Express
// Recorda que express es una funcion... hay que invocarla y guardalo en una constante llamada app
const app = express()

const app = express();

// PASO 3: Informacion que vamos a usar
// Crea una variable (por ej. heroes) y asignale como valor el contenido del archivo "heroes.json"
// Tip: podes usar el require como si fuera un modulo ;)
const heroes = JSON.parse(fs.readFileSync(__dirname + '/heroes.json', 'utf-8'));

const fs = require("fs")

let heroes = fs.readFileSync("heroes.json", "UTF-8")
console.log(heroes);

// PASO 4: Configurando el servidor
// Crea una constante llamada PORT y asignale como valor el numero tres mil
const serverPort = 3000
// ...


const PORT = 3000;



// Reemplaza los guiones por la constante para que utilice ese numero de puerto
// Sabes por que lo definimos como constante y no como variable ? 
<<<<<<< HEAD
app.listen(PORT, () => console.log(`Server running in ${PORT} port`));

// CONSIGNA 1
// Ruta Raíz / Home
app.get('/', function(req,res) {
     res.send("Bienvenidos al Home")
=======
app.listen(serverPort, () => console.log(`Server running in ${serverPort} port`));

// CONSIGNA 1
// Ruta Raíz / Home
app.get('/', function(req,res){
	res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.")
>>>>>>> 35405fbd0c1e30d76fb9ac5e7328f15235299675
});

// CONSIGNA 2
// Ruta /heroes
// Consigna: enviar todo el array
<<<<<<< HEAD
app.get("/heroes", (req,res) => {
  res.send(JSON.parse(heroes));
});
=======
app.get('/heroes', (req,res) => {
	res.json(heroes)
	});
>>>>>>> 35405fbd0c1e30d76fb9ac5e7328f15235299675

// CONSIGNA 3
// Aqui creas la ruta para devolver la pagina de los creditos
// Podes resolverlo en base a los ejemplos anteriores.
app.get('/creditos',(req,res) =>{
	res.send({
		Nombre1: "Emiliano Rosico",
		quote: "CLI is no longer the NORM (if a feature cannot be Automated, it DOES not exist)."
	})
})

// Ruta... ¿Pára qué sirve esto?


app.get('/creditos', (req, res) => {
  res.send(
    {nombre:"Alejandro",
    frase: "Paso a Paso"
  });
});


app.get('*', (req, res) => {
  res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});

