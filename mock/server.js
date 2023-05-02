const express = require("express");
const db = require("./database.json")
const cors = require("cors");
const app = express();

let clients = db.clients;

//parar poder receber arquivos json
app.use(express.json());

//habilitando cors
app.use(cors());

app.get("/clients", (req, res) => {
  setTimeout(() => {
    res.send(clients)
  }, 2000)

});

app.post("/clients", (req, res) => {
   clients.push({...req.body, id: generateId()})

  if(req.body.name === 'error'){
    return res.status(400).send({ status: 'error' })
  }

  setTimeout(() => {
    res.send({ status: 'ok' })
  }, 2000)

});

app.put("/clients", (req, res) => {
  let newClients = clients.filter(c => c.id !== req.body.id)
  newClients.push(req.body)
  clients = newClients;

  if(req.body.name === 'error'){
    return res.status(400).send({ status: 'error' })
  }

  setTimeout(() => {
    res.send({ status: 'ok' })
  }, 2000)
});

function generateId(){
  return Math.floor(Math.random() * 9000) + 1000;

}

const port = 3000
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
