//importa o modulo de configuração do servidor
var app = require('./config/server');


//porta de escuta do servidor
var server = app.listen(3000, function(){
	console.log('Servidor Online');
})

//receber conexao tcp e websocket pela porta (3000)
var io = require('socket.io').listen(server);

app.set('io', io);

//criar conexao por websocket
io.on('connection', function(socket){
	console.log('usuário conectou');

	socket.on('disconnect', function(){
		console.log('usuário desconectou');
	});

	//on - executa a função "nome" e executa a funçao de callback
	//Ouvindo pedidos de execução
	//emit - Pedido para executar alguma ação
});