module.exports = function(application){
	application.get('/', function(req, res){
		//navega ate a função index dentro do modulo index do controllers
		application.app.controllers.index.home(application, req, res);
	});

}