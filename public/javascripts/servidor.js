module.exports=function(io){
   
  io.sockets.on ('connection',function(socket) {
  	/*socket.on('msg', function(msg){
  		for(i=0;i<100;i++){
  			console.log(msg[i]);
  		}
  		console.log(msg);
  		//socket.emit('msg', { text: 'esto es una prueba' }); //a partir de aqui puedo empezar a emitir mensajes a los clientes
  	});*/
  	var butacasOcupadas = [];

  	io.sockets.on('connection', function(socket) {
  		socket.on("send", function(msg){
  			butacasOcupadas = msg;
  			console.log(butacasOcupadas);
  			io.sockets.emit('prueba', butacasOcupadas);
  		});
  	});
  })
}
