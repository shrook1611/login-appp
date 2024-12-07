var sinupName=document.getElementById("sinupName"); 

var signupEmail=document.getElementById("signupEmail"); 

var signupPassword=document.getElementById("signupPassword"); 
var sineUpArray=[];




function loginEmpty(){
    if(signupEmail.value ==""||signupPassword.value ==""){

        return false
    }else{
        return true
    }
}

var loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",function(){

    window.open("home.html" , "_self")
})


function logIn(){
    if(loginEmpty()==false){
        document.getElementById("correct").innerHTML=`<span class="text-danger m-3">all input are required</span>`;
        return false
    }
    var password = signupPassword.value

    var email = signupEmail.value
    for(var i=0;i<sineUpArray.length;i++){
if(sineUpArray[i].signupEmail.tolowercase()==email.value.tolowercase && sineUpArray[i].signupPassword.tolowercase==password.value.tolowercase){
    localStorage.setItem(sessionUsername,sineUpArray[i].sinupName)
 
  
  


}else {
    document.getElementById('correct').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
}





    }


}




