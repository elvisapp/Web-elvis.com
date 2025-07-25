var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');

btnLogin.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
        alert("Bem-Vindo, Usuário Conectado!");
        // console.log("Success!");
        window.location.replace('principal.html');

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert("[Error 001] coloque seus dados correto ou Cadastre-se por favor!");
        // console.log("Failure!")
    });

});
