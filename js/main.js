var listItem = null;
function onMensajeKey(evt){
    if(evt.keyCode == 13){
        var inputMensajes = document.getElementById("mensajes");
        crearMensaje(inputMensajes.value); 
        crearChat(inputMensajes.value);
        inputMensajes.value = "";
    }
}

function crearMensaje(_mensaje){
    var mensajeIn = '<div class="w-message w-message-in">' + 
                    '<div class="w-message-text">' + 
                    '<h5 class="blue-1">Andrea Lamas</h5>' + 
                    '<p>Chicos han visto el nuevo corte de Aldo?</p>' +
                    '<div class="time">11:12</div>' +
                    ' </div>' +
                    '</div>';
    var d = new Date();
    var mensajeOut ='<div class="w-message w-message-out">' +
                    '<div class="w-message-text">' +
                    '<p>' + _mensaje + '</p>' +          
                    '<div class="time">'+ d.getHours() + ':' + d.getMinutes() + '</div>' +
                    '</div>' +  
                    ' </div>';
   var mensaje = document.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
    
// para que el scroll este posicionado al mensaje mas reciente:   
    var chatBox = document.getElementById("chat");
    chatBox.innerHTML += mensajeOut;
    chatBox.scrollTop = chatBox.scrollHeight;
}
function crearChat(_mensaje, _hora){
    d = new Date(); //-------------------
    _hora = d.getHours() + ':' + d.getMinutes();// ----------
    _mensaje = document.getElementById("mensajes").value;//--
    
    var listaChats = document.getElementById("chatsUltimo");
    
    if(listItem==null){
    listItem = document.createElement("li")
    var chatItem =  '<div class="avatar">' + 
                    '<img src="image/logocodeacademy.png" alt="" class="wh-44">' + 
                    '<h4 class="w-contact-name">Laboratoria Perú</h4>' +
                    '<p class="w-last-message" id="mensaje">'+ _mensaje + '</p>' +
                    '</div>' +
                    '<div class="time" id="hora">'+ _hora +'</div>';
							

    listItem.innerHTML+= chatItem;
    listaChats.insertBefore(listItem, listaChats.childNodes[0]);
    listaChats.innerHTML+=chatItem;
    }
}