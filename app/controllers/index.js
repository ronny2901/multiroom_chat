//application - variavel que faz referencia ao objeto do express
module.exports.home = function(application, req, res){
	res.render("index", {validacao: {}});
	//enviando a variavel por parametro
}