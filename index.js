const books = require('./books')
const express = require ('express')
const app = express()

// Middleware for accessing body data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/books/:id', (req, res) => {
    books.forEach(book => {
        if (book.id === parseInt(req.params.id)) res.json(book)
    })
})

app.post('/books', (req, res) => {
    const newBook = {"id": req.body.id, "title": req.body.title, "author": req.body.author}
    //the body comes from the request
    //commonly, we will see this in conjuction with form input 
    JSON.stringify(newBook)
    books.push(newBook)
    res.send(books)
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params

    })

const PORT = 4001
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

