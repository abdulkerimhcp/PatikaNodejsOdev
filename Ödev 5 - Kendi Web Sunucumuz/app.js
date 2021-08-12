const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2><br><br><a href="/">INDEX</a><br><a href="/about">HAKKIMDA</a><br><a href="/contact">İLETİŞİM</a>')
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h2>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h2><br><br><a href="/">INDEX</a><br><a href="/about">HAKKIMDA</a><br><a href="/contact">İLETİŞİM</a>')
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h2>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h2><br><br><a href="/">INDEX</a><br><a href="/about">HAKKIMDA</a><br><a href="/contact">İLETİŞİM</a>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<h2>404 SAYFA BULUNAMADI.</h2><br><br><a href="/">INDEX</a><br><a href="/about">HAKKIMDA</a><br><a href="/contact">İLETİŞİM</a>')

    }
    res.end()
})


const port = 5000

server.listen(port, (req, res) => {
    console.log(`http://localhost:${port}/`)
})