var sinupName=document.getElementById("sinupName"); 

var signupEmail=document.getElementById("signupEmail"); 

var signupPassword=document.getElementById("signupPassword"); 







var sineUpArray=[];
if(localStorage.getItem("user")==null){
    sineUpArray=[]
}else{
    sineUpArray = JSON.parse(localStorage.getItem('users'))
}



// check for empty inputa
function isEmpty(){
    if(sinupName==""||signupEmail==""||signupPassword==""){
        return false

    }else{
        return true 
    }
}
// check for email exisst
function isEmailExist(){
    for(var i=0; i<sineUpArray.length; i++){

if(sineUpArray[i].signupEmail.toLowerCase()==signupEmail.value.toLowerCase()){
    return false
}



    }
}


var sineUpArray=[];
function sineUp(){
    if(isEmpty()==false){
        document.getElementById("incorrect").innerHTML=`<span class="text-danger-mt-2">all inputs are required</span>`;
        return false
    }

    var sinUP={
        sinupName:sinupName.value,
        signupEmail: signupEmail.value,
        signupPassword:signupPassword.value,

    }

    if(sineUpArray.length == 0){
        sineUpArray.push(sinUP);
        localStorage.setItem("user" , JSON.stringify( sineUpArray));
        document.getElementById("incorrect").innerHTML=`<span class="text-success mt-2">Success</span>`;
return true

    }



    if (isEmailExist()==false){
        document.getElementById("incorrect").innerHTML=`<span class="text-danger mt-2">email alraedy exist</span>`;

    }
    else{
        sineUpArray.push(sinUP)
        localStorage.setItem("user" , JSON.stringify( sineUpArray)) 
        document.getElementById("incorrect").innerHTML=`<span class="text-success mt-2">Success</span>`;

    }

}