const express = require('express')
const app = express()
const dataBase = require('./database/dataBaseKnex')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/pokemons', async (req, res) => {
    res.send(await dataBase.mostrarPokemons())
})

app.get('/pokemons/:id', async (req, res) => {
    res.send(await dataBase.mostrarPokemon(req.params.id))
})

app.post('/pokemons', async (req, res) => {
    const pokemon = await dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        origem: req.body.origem,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
})

app.put('/pokemons/:id', (req, res) => {
    const pokemon = dataBase.atualizarPokemons(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        origem: req.body.origem,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
    })
    res.send(pokemon)
})

app.delete('/pokemons/:id', async (req, res) => {
    res.send(await dataBase.deletarPokemon(req.params.id))
})

app.post('/batalha', async (req, res) => {
    res.send(await dataBase.batalhaPokemon(req.body.id1, req.body.id2))
})

app.put('/curar/:id', async (req, res) => {
    res.send(await dataBase.curarPokemon(req.params.id))
})

app.listen(3003)