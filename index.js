import express from "express"
import mysql2 from "mysql2"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    const selectCommand = "SELECT * FROM filmes_guilhermemoraes"

    sql.query(selectCommand, (error, data) => {
        if (error) {
            console.log(error)
            return
        }

        response.json(data)
    })
})

app.post("/create", (request, response) => {
    const { title, genre, age_rating, duration } = request.body

    const insertCommand = "INSERT INTO filmes_guilhermemoraes(title, genre, age_rating, duration) VALUES (?, ?, ?, ?)"

    sql.query(insertCommand, [title, genre, age_rating, duration], (error) => {
        if(error) {
            console.log(error)
            return
        }

        response.status(201).json({
            message: "Filme cadastrado com sucesso!"
        })
    })
})

app.delete("/delete/:id", (request, response) => {
    const { id } = request.params

    const deleteCommand = "DELETE FROM correcao_MarcioMarcal WHERE id=?"

    sql.query(deleteCommand, [id], (error) => {
        if (error) {
            console.log(error)
            return
        }

        response.json({
            message: "Filme apagado com sucesso!"
        })
    })
})

app.put("/update/:id", (request, response) => {
    const { id } = request.params
    const { title, gender, ageLimit, duration } = request.body

    let updateCommand = "UPDATE correcao_MarcioMarcal SET title = ?, genre = ?, age_rating = ?, duration = ? WHERE id = ?"

    sql.query(updateCommand, [title, gender, ageLimit, duration, id], (error) => {
        if (error) {
            console.log(error)
            return
        }

        response.json({
            message: "Filme alterado com sucesso!"
        })
    })
})


app.listen(3000, () => {
    console.log("Servidor online")
})

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MB"
})