async function cadastrarFilme() {
    const title = document.getElementById("title")
    const gender = document.getElementById("gender")
    const age_rating = document.getElementById("age_rating")
    const duration = document.getElementById("duration")

    if (title.value === "" || gender.value === "" || age_rating.value === "" || duration.value === "") {
        alert("Preencha todos os campos!")
        return  
    }

    const filme = {
        title: title.value,
        genre: gender.value,
        age_rating: age_rating.valueAsNumber,
        duration: duration.valueAsNumber
    }

    const resposta = await fetch("https://filmes-project-backend.vercel.app/create", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(filme)
    })

    const mensagem = await resposta.json()

    alert(mensagem.message)

    window.location.href = "../index.html"
}