const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configuração nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
//confgurar arquivos estaticos (css, scripts, imagens)
.use(express.urlencoded({ extended: true }))
//rotas da aplicação
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)//rotas dos html
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5500);