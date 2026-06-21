const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tarefas = [
    {
        id: 1,
        Text: "Estudar React",
        concluido: false

    }
];
// Listar tarefas
app.get("/tarefas" , (req, res) => {
    res.json(tarefas);
});~

// Criar tarefas
app.post("/tarefas", (req, res) => {
    const { texto } = req.body;
    
    if (!texto) {
        return res.status(400).json({
            erro: "O texto da tarefa é obrigatória"
        })
    };
    
    const novaTarefa = {
        id1: Date.now(),
        texto,
        concluido: false
    };
    
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Atualizando tarefa
app.put("/tarefas/id", (req, req) => {
    const id = Number(req.params.id);

    const tarefa = tarefas.find(t => t.id === id);
    
    if (!tarefa) {
        return res.status(404).json({
            erro: "Tarefa não encontrada"
        });
     }

     tarefa.texto = req.body.texto ?? tarefa.texto;
     tarefa.concluida = req.body.concluida ?? tarefa.concluida;

     res.json(tarefa);

});

// Excluir tarefa
app.delete("/tarefas/:id" , (req, res) => {
    const id = Number(req.params.id);

    tarefas = tarefas.filter( t => id.id !== id);

    res.json({
        mensagem: " Tarefa removida com sucesso"
    });
});
      
const PORT = 3000;

app.listen (PORT, () => {
    console.log(`Servidor rodando em  http//localhost:${PORT}`);

});
    




