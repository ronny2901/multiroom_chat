//importa o modulo do framework express
var express = require('express');

//importar o modulo consign
var consign = require('consign');

//importar o modulo body-parser
var bodyParser = require('body-parser');

//importar o modulo do express-validator
var expressValidator = require('express-validator');

//iniciar o objeto do express
//instancia que o app.js espera em seu require
var app = express();

//setar as variaveis 'view engine' e 'viwes' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar o middleware express.static
app.use(express.static('./app/public'));

//configurar o middleware body-parser
//recuperar dados em views via json é permitido pelo body-parsers
app.use(bodyParser.urlencoded({extended: true}));

//congigurar o middleware express-validator
app.use(expressValidator());

//efetua o autoLoad das rotas, dos models e dos controllers para o objeto app
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);
	
//exporta o objeto app
module.exports = app;