import methodOverride from "method-override";
import cors from "cors";
import express from "express";
//

const app = express();
const log = console.log;

let port = process.env.PORT || 3000;

let users = ["bart", "lisa", "homero","marge"];

app.use(cors());
app.use(methodOverride());

app.get("/users", (req, res) => {
    res.send(users);
});

app.post("/users/create/:nombre", (req, res) => {

    users.push(req.params.nombre);
    res.send("Usuario Enviado");

});

app.put("/users/modificar/:nombre/:nuevoNombre", (req, res) =>{

    let nombre = req.params.nombre;

    let index = users.findIndex((element) => element === nombre);

    users[index] = req.params.nuevoNombre;

    res.send(`El usuario ${nombre} ahora se llama ${users[index]}`);
    
});

app.delete("/users/delete/:nombre" , (req, res) => {
    
    let nombre = req.params.nombre;

  /*   let index = users.findIndex((element) => element === nombre);
    users.slice(index,1); */

    users = users.filter(user => user !== nombre);

    res.send(`El usuario ${nombre} fue borrado`);

});


app.listen(port, () => {
    log("star server");
});