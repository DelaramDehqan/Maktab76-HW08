// Then design a custom page that uses flexbox and takes the information localStorage
// or cookie and displays the username and password on the screen after 5 seconds.
// For example: “Welcome Parisa” and your Password is ******



function Login(){
 var a = new Array();
 up1 = new Object();

    up1={
    name:'abcd@gmail.com',
    password:btoa('abc@12')
}
};
a.push(up1);
var username = document.getElementById('uname').value;
var password = document.getElementById('psw').value;
sessionStorage.setItem("currentloggedin",username);
localStorage.setItem(JSON.stringify(a));

alert('welcome parisa,your password is *****');