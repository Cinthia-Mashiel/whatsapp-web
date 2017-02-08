//--Funcion que da valor y puede ser reutilizable para crear lista chats:
function nuevoChat(_name, _image, _ultimoMensaje, _ultimaHora){
	this.name =  _name;
	this.imageURL = _image;
	this.ultimoMensaje = _ultimoMensaje;
	this.ultimoMensajeHora = _ultimaHora;
}
var listaDeChats = [
	new nuevoChat("chat 1", "image/logocodeacademy.png", "Todo esta bien", "20:10"),
	new nuevoChat("chat 2", 'image/logocodeacademy.png'),
	new nuevoChat("chat 2", 'image/logocodeacademy.png')
]
//------------------------------------------Comienzo-----------------------
var listaItem = null;
function iniciar(){
    alert("Se Cargo la Página");
	iniciarListaChat();
}

function iniciarListaChat(){
	var listaOnChat = document.getElementById("lista-chats");
    for (var c in listaDeChats){
		var htmlChatItem = '<li><div class="avatar">' +
			'<img src="' + listaDeChats[c].imageURL +  '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">' + listaDeChats[c].name + '</h4>' +
			'<p class="w-last-message" id="mensaje">' + listaDeChats[c].ultimoMensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">' + listaDeChats[c].ultimoMensajeHora + '</div></li>';
		listaOnChat.innerHTML += htmlChatItem;
	}
        createLi();
}
// funcion para crear "li":
function createLi(){
	var listaChats = document.getElementById('lista-chats');
	var arrayListItem = listaChats.getElementsByTagName('li');
    for(var i = 0; i < arrayListItem.length; i++){
		arrayListItem[i].addEventListener("click", onChatItemClick);
	}
}

function onChatItemClick(evt){
	var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
	var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;
	actualizarCabeceraChat(contactName, imgURL, "En Linea");
}

function validateEnter(evt) {
	if (evt.keyCode == 13) {
		var inputMensajes = document.getElementById("mensajes");
        crearChat(inputMensajes.value);
		crearMensaje(inputMensajes.value);
        inputMensajes.value = "";
	}
}
//--Funcion para crear chat con burbuja y pasar valores al li:
function crearMensaje(_mensaje) {
	var mensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
		'<h5 class="green-1">Maria Paula Rivarola</h5>' +
		'<p>Jajaja Sii finalmente se corto!!</p>' +
		'<div class="time">11:13</div>' +
		'</div>' +
		'</div>';

	var d = new Date();
	var mensajeOut = '<div class="w-message w-message-out">' +
		'<div class="w-message-text">' +
		'<p>' + _mensaje + '</p>' +
		'<div class="time">' + d.getHours() + ':' + d.getMinutes(); +
        '</div>' + '</div>' + '</div>';

	var mensaje = listaItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;

	var scroll = document.getElementById("chat");
	scroll.innerHTML += mensajeOut;
	scroll.scrollTop = scroll.scrollHeight;
}
//--Funcion que crea chats en la lista de chats:
function crearChat(_mensaje) {
	var listaOnChat = document.getElementById("lista-chats");
    if(listaItem == null){
		listaItem = document.createElement('LI');
        var htmlChatItem = '<div class="avatar">' +
			'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">Laboratoria Perú</h4>' +
			'<p class="w-last-message" id="mensaje">' + _mensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">14:27</div>';
        listaItem.innerHTML = htmlChatItem;
        listaOnChat.insertBefore(listaItem, listaOnChat.childNodes[0]);
	}
	createLi();
}
//--Funcion para cambiar la cabecera del usuario (chat):
function actualizarCabeceraChat(_contactName, _imageURL, _estado) {
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML = _contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML = _estado;
	chatHeader.getElementsByTagName('img')[0].src = _imageURL;
}