var APPLICATION_ID = 'DEED6080-D9AA-EDF5-FFEE-C790CB709C00',
    SECRET_KEY = '985984D0-2797-CEB0-FF63-2E49F619C700',
    VERSION = 'v1'; //default application version;
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

function regform(){
var user = new Backendless.User();
user.name = document.getElementById("usernamesignup").value;
user.email = document.getElementById("emailsignup").value;
user.password = document.getElementById("passwordsignup").value;
user.password_confirm = document.getElementById("passwordsignup_confirm").value;



 
try
{
 Backendless.UserService.register( user );
}
catch( err )
{
 console.log( "error message - " + err.message );
 console.log( "error code - " + err.statusCode );
}
window.location="http://www.idroidwarz.com/vendor/index.html"
}


function logform(){

var user;
username = document.getElementById("username").value;
password = document.getElementById("password").value;
 
try
{
 user = Backendless.UserService.login( username, password );
}
catch( err ) // see more on error handling
{
 console.log( "error message - " + err.message );
 console.log( "error code - " + err.statusCode );
}

if( Backendless.UserService.isValidLogin() )
{
window.location="http://www.idroidwarz.com/vendor/adpost.html"
}

}


function postad(){

var callback = new Backendless.Async(
function( result )
{
alert( "geo point saved " + result.geopoint.objectId );
},
function(result)
{
alert( "error - " + result.message );
});

var point = {
latitude: parseFloat(document.getElementById("lat").value),
longitude: parseFloat(document.getElementById("lng").value),
categories: document.getElementById("category").value,
metadata: {"AD":document.getElementById("ad").value}
}
Backendless.Geo.addPoint( point, callback );

}