var btnLogin = document.getElementById("btn-login");
var usuario = document.getElementById("login-usuario");
var contrasena = document.getElementById("login-contrasena");
var errorAlert = document.getElementById("error-alert");

btnLogin.addEventListener("click", function() {
  if(usuario.value === '' || contrasena === '') {
    console.log('Llene los campos.');
    MostrarError('Llene los campos.');
  }
  else
  {
    if(usuario.value === 'admin' || contrasena === 'admin') {
      window.location.href = '/panel-admin';
    }else {
      console.log('Error al iniciar sesión. Revise los datos.');
      MostrarError('Error al iniciar sesión. Revise los datos.');
    }
  }
});

function MostrarError(msg) {
  errorAlert.classList.remove('element-hidden');
  errorAlert.innerHTML = msg;
}
