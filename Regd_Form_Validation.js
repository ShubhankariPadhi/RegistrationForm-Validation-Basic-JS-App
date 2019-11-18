
//get user input values using dom
var FirstName=document.getElementById("fname_id");
var LastName=document.getElementById('lname_id');
var DateOfBirth=document.getElementById('dob_id');
var EmailId=document.getElementById('emailId');
var Password=document.getElementById('pass');
var ConfirmPassword =document.getElementById('cnfmpass');

//creating pattern for every fields
//var FirstName_pattern=/^[A-Za-z_]{2,30}$/;
//var LastName_pattern=/^[A-Za-z_]{2,30}$/;
//var dob_pattern=;
var email_pttern=/^[a-zA-Z0-9_.]{4,30}@[a-zA-Z]{2,7}[.]{1}[a-zA-Z.]{2,20}$/;
var password_pttern=/^[A-Z]{1}[A-Za-z_0-9]{5,8}$/;
//var ConfirmPassword_pattern=;


FirstName.addEventListener("blur", fname_fun ,true);
LastName.addEventListener("blur",lname_fun,true);
DateOfBirth.addEventListener("blur",dob_fun,true);
EmailId.addEventListener("blur",email_fun,true);
Password.addEventListener("blur",password_fun,true);
ConfirmPassword.addEventListener("blur",cpsw_fun,true);




function validation_function() {
    //FirstName = document.forms["RegForm"]["fname"];
    //LastName = document.forms["RegForm"]["lname"];
    // DateOfBirth = document.forms["RegForm"]["dob"];
    //EmailId = document.forms["RegForm"]["email_id"];
    //Password =  document.forms["RegForm"]["Password"];
    // ConfirmPassword = document.forms["RegForm"]["ConfirmPassword"];

//document.cookies="firstName=FirstName.value";
//localStorage.setItem("key","value");
//storing field values in key value pair to get values from session object in other document page
    sessionStorage.setItem("firstName", FirstName.value);
    sessionStorage.setItem("lastName", LastName.value);
    sessionStorage.setItem("dob", DateOfBirth.value);
    sessionStorage.setItem("emailId", EmailId.value);
    sessionStorage.setItem("password", Password.value);
    sessionStorage.setItem("cpsw", ConfirmPassword.value);


    //firstName conditions
    if (FirstName.value == "") {
        FirstName.focus();
        //document.getElementById("fname_error").innerHTML = "Please enter your FirstName.";
        firstname_validation();
        return false;
    }
    else {

        document.getElementById("fname_error").innerHTML = "";
    }

//lastName conditions
    if(LastName.value == "") {
        LastName.focus();
        //document.getElementById("lname_error").innerHTML = "Please enter your LastName";
        lastname_validation();
        return false;
    }
    else
    {
        document.getElementById("lname_error").innerHTML="";
    }


//dob condition
    if (DateOfBirth.value == "") {
        //document.getElementById("dob_error").innerHTML = "Please enter your Date of birth.";
        DateOfBirth.focus();
        return false;
    }
    else{
        document.getElementById("dob_error").innerHTML="";
    }

//email condition
    if( EmailId.value==""){
        //document.getElementById("email_error").innerHTML="Please enter your emailId";
        EmailId.focus();
        email_validation();
        return false;
    }

    else {
        document.getElementById("email_error").innerHTML = "";
    }

//password condition
    if (Password.value == "" ) {
        //document.getElementById("password_error").innerHTML = "this field is manadatory";
        Password.focus();
        password_validation();
        return false;
    }

    else {
        document.getElementById("password_error").innerHTML = "";
    }

//confirmpassword condition
    if(ConfirmPassword.value == "" ){
        //document.getElementById("cpsw_error").innerHTML = "Please fill this box";
        ConfirmPassword.focus();
        cpsw_validation();
        return false;
    }
    else{  document.getElementById("cpsw_error").innerHTML = "";


    }

    return true;
}




function firstname_validation(){
    if((FirstName.value.length<=2) || (FirstName.value.length>30)){
        document.getElementById('fname_id').style.backgroundColor="red";
        document.getElementById("fname_error").innerHTML = "please enter your FirstName, charachers must be in between 2 to 30";
        FirstName.focus();
        return false;
    }

    else {

        document.getElementById('fname_id').style.backgroundColor="green";
    }
}
function lastname_validation(){

    if((LastName.value.length<=2) || (LastName.value.length>30)){
        LastName.focus();
        document.getElementById('lname_id').style.backgroundColor="red";
        document.getElementById("lname_error").innerHTML = "please enter your LastName, charachers must be in between 2 to 20";
        return false;
    }
    else{
        document.getElementById('lname_id').style.backgroundColor="green";
    }
}

function email_validation(){
    if(email_pttern.test(EmailId.value)==false ){
        document.getElementById("email_error").innerHTML="please enter your emailid in the above format";
        document.getElementById('emailId').style.backgroundColor="red";
        EmailId.focus();
        return false;
    }
    else
    {
        document.getElementById('emailId').style.backgroundColor="green";
    }
}

function password_validation(){

    if((Password.value.length<=5)||(Password.value.length>8))
    {
        document.getElementById("password_error").innerHTML = "enter your password, length must be in between 5 to 8";
        Password.focus();
        document.getElementById('pass').style.backgroundColor="red";
        return false;
    }
    if(!Password.value.match(password_pttern)){
        document.getElementById("password_error").innerHTML = "Starting letter must be in capital";
        document.getElementById('pass').style.backgroundColor="red";
        Password.focus();
        return false;
    }
    else{
        document.getElementById('pass').style.backgroundColor="green";
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
    }
}







//functions for session fields  to blur error messages from page after filling textbox
function  fname_fun() {
    if (FirstName.value == "") {
        FirstName.focus();
        document.getElementById("fname_error").innerHTML = "Please enter your FirstName.";
        return false;
    }
    else {

        document.getElementById("fname_error").innerHTML = "";
        return true;
    }
}
function lname_fun() {
    if(LastName.value =="") {
        document.getElementById("lname_error").innerHTML = "Please enter your LastName";
        LastName.focus();
        return false;
    }
    else {
        document.getElementById("lname_error").innerHTML="";
        return true;
    }
}
function dob_fun() {

    if (DateOfBirth.value == "") {
        document.getElementById("dob_error").innerHTML = "Please enter your Date of birth.";
        DateOfBirth.focus();
        return false;
    }
    else{
        document.getElementById("dob_error").innerHTML="";
        return true;
    }
}
function  email_fun()

{
    if( EmailId.value==""){
        document.getElementById("email_error").innerHTML="this field cant be empty";
        EmailId.focus();
        return false;
    }
    else {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}
function password_fun()
{
    if (Password.value == "" ) {
        document.getElementById("password_error").innerHTML = "this field is manadatory";
        Password.focus();
        return false;
    }
    else {
        document.getElementById("password_error").innerHTML = "";
        return true;
    }
}

function cpsw_fun(){

    if (ConfirmPassword.value == ""){
        document.getElementById("cpsw_error").innerHTML = "This field cant be empty";
        ConfirmPassword.focus();
        return false;
    }
    else{
        document.getElementById('cpsw_error').innerHTML="";
        return true;
    }
}






