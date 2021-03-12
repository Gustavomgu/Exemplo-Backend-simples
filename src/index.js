const express = require("express");

const app = express();

app.get('/projects', (req, resp) => {
    return resp.send([
        "Projeto 1",
        "Projeto 2"
    ]);
});

app.post('/projects', (request, response) => {
    return response.send([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ]);
});

app.put('/projects/:id',(request, response) => {
    return response.send([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3",
        "Projeto 4",
    ]);
});

app.delete("/projects/:id", (request, response) => {
    return response.send([
        "Projeto 2",
        "Projeto 3",
        "Projeto 4"
    ]);
})

app.listen(3001, () => {
    console.log(' O servidor subiu');
});
