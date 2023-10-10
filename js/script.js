
var socket = io();
var form = document.getElementById('form');
var input = document.getElementById('messageInp');
var userID = Date.now();

form.addEventListener('submit', function(e) {
e.preventDefault();
if (input.value) {

    socket.emit('chat message', input.value,userID);
    console.log("btn clicked!!!!");
    input.value = '';
}
});

socket.on('chat message', function(msg,myID) {
var item = document.createElement('li');

if(myID == userID){
    item.classList.add("message");     
    item.classList.add("right");     
}
else{
    item.classList.add("message"); 
    item.classList.add("left"); 
}

// item.classList.add("message-right"); //New
item.textContent = msg;
messages.appendChild(item);
window.scrollTo(0, document.body.scrollHeight);
});
