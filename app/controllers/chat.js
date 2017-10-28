module.exports.iniciaChat = function(application, req, res){

	var dadosForm = req.body;
	console.log(dadosForm);
	req.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty();
	req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres.').len(3, 15);

	var erros = req.validationErrors();

	if (erros){
		res.render("index", {validacao : erros});
		//permite devolver as informações de erros para a view		
		return;
	}

	//utiliza o objeto do socket io dentro do controller
	application.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat!'}
    )


	res.render('chat', { dadosForm : dadosForm });
}