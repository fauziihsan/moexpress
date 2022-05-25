const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

// start koneksi database
const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlparser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true
    })
    .then(()=>{
        console.log(`Database Connected`)
    })
    .catch((err) =>{
        console.log(`Cannnot connected to database!`, err)
        process.exit()
    })
// end koneksi database

app.get('/', (req,res) =>{
    data = [
        {
            nama: 'Fauzi Ihsan',
            alamat: 'Muara Bungkal'
        },
        {
            nama: 'Dzaka Abdillah',
            alamat: 'Muara Bungkal'
        }
    ]
    res.json({
        message: "welcome to express api",
        data,
        status: true,
        code: 200
    }, 200)
})
app.get('/data', (req, res) =>{
    data = [
        {
            nama: 'Ziyad',
            alamat: 'Muara Bungkal'
        },
        {
            nama: 'Dzaka Abdillah',
            alamat: 'Muara Bungkal'
        }
    ]
    res.json({
        message: "welcome to express api",
        data,
        status: true,
        code: 200
    }, 200)
})

// app.get('/fauzi', (req,res) =>{
//     data = [{
//         'nama': 'fauzi',
//         'alamat': 'muara bungkal'
//     }]
//     res.json({
//         message: "welcome to express api",
//         data: data
//     })
// })

// app.get('/ihsan', (req,res) =>{
//     data = [{
//         'nama': 'fauzi',
//         'alamat': 'muara bungkal'
//     }]
//     res.json({
//         message: "welcome to express api",
//         data: data
//     })
// })


require('./app/routes/post.routes')(app)



const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})