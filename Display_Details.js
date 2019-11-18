

function init(){
    //getting all the form field values entered by user in index page using session obj
    document.getElementById('fn_disp_id').innerText = sessionStorage.getItem("firstName");
    document.getElementById('ln_disp_id').innerText =sessionStorage.getItem("lastName") ;
    document.getElementById('dob_disp_id').innerText =sessionStorage.getItem("dob");
    document.getElementById('em_disp_id').innerText = sessionStorage.getItem("emailId");
    document.getElementById('psw_disp_id').innerText = sessionStorage.getItem("password");
    document.getElementById('cpswd_disp_id').innerText = sessionStorage.getItem("cpsw");

}
