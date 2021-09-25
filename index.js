const http = require('http')
try {
    let port = process.env.PORT || 5000
    http.createServer((req, res) => {
        res.write("Hello World\n")
        res.write(`Server Started in port : ${port}`)
        res.end()
    }).listen(port)
} catch (e) {
    console.log(e);
}
