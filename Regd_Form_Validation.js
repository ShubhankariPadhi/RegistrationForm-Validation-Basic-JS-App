
//get user input values using dom
var FirstName=document.getElementById("fname_id");
var LastName=document.getElementById('lname_id');
var DateOfBirth=document.getElementById('dob_id');
var EmailId=document.getElementById('emailId');
var Password=document.getElementById('pass');
var ConfirmPassword =document.getElementById('cnfmpass');

//creating pattern for every fields
var FirstName_pattern=/^[A-Za-z_]{2,30}$/;
var LastName_pattern=/^[A-Za-z_]{2,30}$/;
var dob_pattern=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
//^(0?[1-9]|[12][0-9]|[3][01])[\/-](0?[1-9]|[1][012])[\-][12]{1}\d{3}$/
var email_pttern=/^[a-zA-Z0-9_.]{4,30}@[a-zA-Z]{2,7}[.]{1}[a-zA-Z.]{2,20}$/;
var password_pttern=/^[A-Z]{1}[A-Za-z_0-9]{5,8}$/;
//var ConfirmPassword_pattern=;





function validation_function() {

//document.cookies="firstName=FirstName.value";
//localStorage.setItem("key","value");
//storing field values in key value pair to get values from session object in other document page
    sessionStorage.setItem("firstName", FirstName.value);
    sessionStorage.setItem("lastName", LastName.value);
    sessionStorage.setItem("dob", DateOfBirth.value);
    sessionStorage.setItem("emailId", EmailId.value);
    sessionStorage.setItem("password", Password.value);
    sessionStorage.setItem("cpsw", ConfirmPassword.value);

    if (FirstName.value == "") { firstname_validation(); return false; }

    if(LastName.value == "") { lastname_validation(); return false; }

    if (DateOfBirth.value == "") { dob_validation(); return false;  }

    if( EmailId.value==""){  email_validation(); return false; }

    if (Password.value == "" ) { password_validation(); return false; }

    if(ConfirmPassword.value == "" ){ cpsw_validation(); return false; }

    return true;
}




function firstname_validation(){
    if((FirstName.value.length<=2) || (FirstName.value.length>30)){
        document.getElementById('fname_id').style.backgroundColor="red";
        document.getElementById("fname_error").innerHTML = "please enter your FirstName, charachers must be in between 2 to 30";
        FirstName.focus();
        return false;
    }
    if(FirstName_pattern.test(FirstName.value)==false)
    {
        document.getElementById('fname_id').style.backgroundColor="red";
        document.getElementById("fname_error").innerHTML = "Digits are not allowed";
        FirstName.focus();
        return false;

    }
    else {

        document.getElementById('fname_id').style.backgroundColor="green";
        document.getElementById('fname_error').innerHTML="";
        return true;
    }
}
function lastname_validation(){

    if((LastName.value.length<=2) || (LastName.value.length>30)){
        LastName.focus();
        document.getElementById('lname_id').style.backgroundColor="red";
        document.getElementById("lname_error").innerHTML = "please enter your LastName, charachers must be in between 2 to 20";
        return false;
    }

    if(LastName_pattern.test(LastName.value)==false){
        LastName.focus();
        document.getElementById('lname_id').style.backgroundColor="red";
        document.getElementById("lname_error").innerHTML = "Digits are not allowed";
        return false;
    }
    else{
        document.getElementById('lname_id').style.backgroundColor="green";
        document.getElementById("lname_error").innerHTML="";
        return false;
    }
}


function  dob_validation() {
    if(dob_pattern.test(DateOfBirth.value)==false){
        DateOfBirth.focus();
        document.getElementById('dob_id').style.backgroundColor="red";
        document.getElementById('dob_error').innerHTML="please enter a valid date";
    }
else {
        document.getElementById('dob_id').style.backgroundColor="green";
        document.getElementById("dob_error").innerHTML = "";
        return false;
    }

}

function email_validation(){
    if(email_pttern.test(EmailId.value)==false ){
        document.getElementById("email_error").innerHTML="please enter your emailid in this format you@gmail.com";
        document.getElementById('emailId').style.backgroundColor="red";
        EmailId.focus();
        return false;
    }
    else
    {
        document.getElementById('emailId').style.backgroundColor="green";
        document.getElementById("email_error").innerHTML = "";
        return false;
    }
}

function password_validation(){

    if(!Password.value.match(password_pttern)){
        document.getElementById("password_error").innerHTML = "Please enter your password, Starting letter must be in capital";
        document.getElementById('pass').style.backgroundColor="red";
        Password.focus();
        return false;
    }
    if((Password.value.length<=5)||(Password.value.length>8))
    {
        document.getElementById("password_error").innerHTML = "enter your password, length must be in between 5 to 8";
        Password.focus();
        document.getElementById('pass').style.backgroundColor="red";
        return false;
    }

    else{
        document.getElementById('pass').style.backgroundColor="green";
        document.getElementById("password_error").innerHTML = "";
        return false;
    }

}

function cpsw_validation(){

    if ( Password.value!=ConfirmPassword.value){
        document.getElementById("cpsw_error").innerHTML = "Password mismatched";
        document.getElementById('cnfmpass').style.backgroundColor="red";
        ConfirmPassword.focus();
        return false;
    }
    else{
        document.getElementById('cnfmpass').style.backgroundColor="green";
        document.getElementById("cpsw_error").innerHTML = "";
        return false;

    }
}









