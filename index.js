const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

const usuarios = [
    {
        nome: "Tiago Pires",
        endereco: "TigasLandia",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Color_Photographed_B-17E_in_Flight.jpg/800px-Color_Photographed_B-17E_in_Flight.jpg"
    },
    {
        nome: "Tiago Pipoca",
        endereco: "TigasLandia",
        img: "https://s2-autoesporte.glbimg.com/Df53P65Lwv3x_u0tCoFx-AW8HKQ=/0x0:1400x788/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/H/I/6uDn06QN2oOoHildWQjQ/saa-7.jpg"
    },
    {
        nome: "Tigas",
        endereco: "TigasLandia",
        img: "https://g1.globo.com/Noticias/Mundo/foto/0,,13465634,00.jpg"
    },
    {
        nome: "Juliana",
        endereco: "",
        img: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/quiz-question-alternative-image/png/19c3901342849d5ca5383ef91535f4e4.png"
    }
]

app.get("/", (req, res) => {
    res.render("home", {usuarios})
})

app.get("/usuario/:id", (req, res) => {
    let usuario = {
        nome: "Tiago Pires",
        endereco: "TigasLandia",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Color_Photographed_B-17E_in_Flight.jpg/800px-Color_Photographed_B-17E_in_Flight.jpg"
    };
    res.render("usuario", {
        usuario,
        id: req.params.id,

    })
})

/*app.get("/usuario/:id", (req , res)  => {
    let nome = "Tiago Pires"
    let img = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Color_Photographed_B-17E_in_Flight.jpg/800px-Color_Photographed_B-17E_in_Flight.jpg"
    res.render("usuario", {
        nome,
        id: req.params.id,
        img,

    })
})*/

app.get("/novo", (req, res) => {
    res.render("formCadastro")
})

app.post("/novo", (req , res) => {
    const usuario ={
        nome: req.body.nome,
        endereco: req.body.endereco
    }

usuarios.push(usuario)

res.redirect("/")

})

app.listen(8000, () => {
    console.log("Rodando o Tiago Pipoca")
    console.log("http://localhost:8000/")
})