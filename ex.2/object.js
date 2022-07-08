
// Write a file that clicks the login button to store user information in an object called
// userInfo in Local Storage or Cookie.
// 1. note:<button onclick="myFunction()">
// 2. note:Get information with id inputs
// for example
// User information included

// let infoUser = {userName: "delaram", password: 123456};

function setUserinfo(){
    document.cookie = "userName: delaram";
    document.cookie = "password: 123456";
    alert("welcome");
}

function getUserinfo(){
    var result = document.getElementById("Result");
    result.innerHTML = document.cookie;
}