//Obtener los botones de tipo submit
let submitButtons = $('button[type=submit]');

//Agregar el sistener
submitButtons.on('click', validateForm);
