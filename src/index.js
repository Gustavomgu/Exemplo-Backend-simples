const express = require("express");

const {uuid, isUuid} = require("uuidv4");

const app = express();

app.use(express.json());

function validateProjectId(req, resp, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
        return resp.status(400).send({
            error: 'Invalid project id'
        })
    }

    return next();
}

const projects = [];

app.get('/projects', (req, resp) => {

    const { title } = req.query;

    const result = title ? projects.filter(p => p.title.includes(title)) : projects;

    return resp.send(result);
});

app.post('/projects', (request, response) => {

    const {title, owner} = request.body;

    const project = {id: uuid(), title, owner}

    projects.push(project);

    return response.send(project);
});

app.put('/projects/:id',validateProjectId,(request, response) => {

    const {id} = request.params;


    const projectIndex = projects.findIndex(project => project.id = id);

    if (projectIndex < 0) {
        return response.send({error: "project not found"}).status(400);
    }

    const {title, owner} = request.body;

    const project = {
        id,
        title,
        owner
    }
    
    projects[projectIndex] = project;

    return response.send(project);
});

app.delete("/projects/:id", (request, response) => {

    const {id} = request.params;

    const projectIndex = projects.findIndex(p => p.id = id);

    if (projectIndex < 0 ) {
        return response.send({error: "Project not found!"}).status(400);
    }

    projects.splice(projectIndex,1)
    
    return response.status(204).send();
})

app.listen(3001, () => {
    console.log(' O servidor subiu');
});
