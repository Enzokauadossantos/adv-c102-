// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyC-QnSo-T5PNbrXZVAFirMWn-ZV601-AU4",
    authDomain: "xetdaspro.firebaseapp.com",
    databaseURL: "https://xetdaspro-default-rtdb.firebaseio.com",
    projectId: "xetdaspro",
    storageBucket: "xetdaspro.appspot.com",
    messagingSenderId: "923147826650",
    appId: "1:923147826650:web:1caa4e26da07875c1d7ce3"
};
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("user-name", user_name);

   window.location ="chat_room.html";
}



