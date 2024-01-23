function getData ()
{
    firebase.database() .ref("/") .on('value' , function(snapshot)
    {document.getElementById("output") .innerHTML=
"" ;snapshot.forEach (function(childSnapshot) {chilKey =
childSnapshot.Key;
Room_names = chilchildkey;
})})
};