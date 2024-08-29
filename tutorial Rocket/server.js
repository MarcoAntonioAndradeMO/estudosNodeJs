// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//     response.write('oi');
    
//     return response.end();
// })

// server.listen(3333);

// // POST localhost: 3333/videos
// // DELET lcoalhost: 3333/videos/l

import { fastify } from "fastify";
import { DataBaseMemory } from "./database-memory.js";
import { request } from "http";

const server = fastify();
const database = new DataBaseMemory();

// GET ==> Método HTTP GET => busca alguma informação
// POST ==> Utilizado para criar registros
// PUT ==> Atualizar informação
// DELETE ==> Deletar algo
// Patch ==> Editar alguma informação específica

// No navegador conseguimos testar apenas rotas GET

// Para criar vídeos:

// POST htt´://localhost:3333/videos

// Request Body (Post/ Put) ==> Enviar o Corpo da requisição

server.get('/', () => {
    return 'Hello World!'
})

server.post('/vdeos', () => {
    const {title, description, duration } = request.body
    database.create({
        title: title,
        description: description,
        duration: duration,
    })

    console.log(database.list())

    return reply.status(201).send();
})

server.get('/videos', (request) => {
    const search = request.query.search;

    const videos = database.list(search);

    return videos;
})

server.put('/videos/:id', () => {
    const videoId = request.params.id;
    const {title, description, duration } = request.body

    const video = database.update(videoId, {
        title,
        description,
        duration,    
    })

    return reply.status(204).send;
})

server.delete('/videos/:id', () => {
    const videoId = request.params.id;

    database.delete(videoId)

    return reply.status(204).send();
})

server.listen({
    port: 3333,
});