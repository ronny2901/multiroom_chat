//importa o modulo de configuração do servidor
var app = require('./config/server');


//porta de escuta do servidor
var server = app.listen(3000, function(){
	console.log('Servidor On the line');
})

//receber conexao tcp e websocket pela porta (3000)
var io = require('socket.io').listen(server);

app.set('io', io);

//criar conexao por websocket
io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });


	//ouvindo a mensagem do servidor
	socket.on('msgParaServidor', function(data){
	//data(funcao de callback)

		// dois proximos metodos é funcao de dialogo
		socket.emit(
            'msgParaCliente',  
			{ apelido: data.apelido, mensagem: data.mensagem }
		);

		socket.broadcast.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );

        // dois proximos metodos é funcao da lista desconectou participantes
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
			socket.emit(
	            'participantesParaCliente',  
				{ apelido: data.apelido }
			);

			socket.broadcast.emit(
	            'participantesParaCliente',
	            { apelido: data.apelido }
	        );
		}
	});
	//on - executa a função "nome" e executa a funçao de callback
	//Ouvindo pedidos de execução
	//emit - Pedido para executar alguma ação
});