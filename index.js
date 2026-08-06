import express from "express";
import mysql2 from "mysql2";

const app = express();
app.use(express.json());



app.get ("/", (request, response)=>{
    response.json({
        message:"Servidor dos filmes aberto"
    })
})


app.post("/filmes", (request, response) => {
    const { id, title, genre, duration, age_rating } = request.body;
    
    const insertCommand = "INSERT INTO filmes_guilhermemoraes (id, title, genre, duration, age_rating) VALUES (?, ?, ?, ?, ?)";

    sql.query(insertCommand, [id, title, genre, duration, age_rating], (error) => {
        if (error) {
            console.log(error);
            return response.status(500).json({ error: "Erro interno ao adicionar o filme." });
        }
        
        response.status(201).json({
            message: "Filme adicionado com sucesso!"
        });
    });
});


app.put("/filmes/:id", (request, response) => {
    const { id } = request.params; 
    const { title, genre, duration, age_rating } = request.body; 

    const updateCommand = "UPDATE filmes_guilhermemoraes SET title=?, genre=?, duration=?, age_rating=? WHERE id=?";

    sql.query(updateCommand, [title, genre, duration, age_rating, id], (error) => {
        if (error) {
            console.log(error);
            return response.status(500).json({ error: "Erro interno ao atualizar o filme." });
        }

        response.status(200).json({
            message: "Filme atualizado com sucesso!"
        });
    });
});


app.delete("/filmes/:id", (request, response) => {
    const { id } = request.params; 

    const deleteCommand = "DELETE FROM filmes_guilhermemoraes WHERE id=?";

    sql.query(deleteCommand, [id], (error) => {
        if (error) {
            console.log(error);
            return response.status(500).json({ error: "Erro interno ao deletar o filme." });
        }
        
        response.status(200).json({
            message: "Filme apagado com sucesso!"
        });
    });
});

app.listen(3000, () => {
    console.log("Servidor aberto na porta 3000");
});


const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MB" 
});
