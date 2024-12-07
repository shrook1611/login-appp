var sinupName=document.getElementById("sinupName"); 

var signupEmail=document.getElementById("signupEmail"); 

var signupPassword=document.getElementById("signupPassword"); 



var username = localStorage.getItem('sessionUsername');

if (username){
    document.getElementById('username').innerHTML =` welcom ${username}`

} 




function logout() {
    localStorage.removeItem('sessionUsername')
}