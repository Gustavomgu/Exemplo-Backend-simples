const express = require("express");

const app = express();

app.use(express.json());

app.get('/projects', (req, resp) => {

    const query = req.query;

    console.log(query);

    return resp.send([
        "Projeto 1",
        "Projeto 2"
    ]);
});

app.post('/projects', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.send([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ]);
});

app.put('/projects/:id',(request, response) => {

    const params = request.params;

    const body = request.body;

    console.log(params);

    console.log(body);

    return response.send([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3",
        "Projeto 4",
    ]);
});

app.delete("/projects/:id", (request, response) => {

    const params = request.params;

    console.log(params);
    
    return response.send([
        "Projeto 2",
        "Projeto 3",
        "Projeto 4"
    ]);
})

app.listen(3001, () => {
    console.log(' O servidor subiu');
});
