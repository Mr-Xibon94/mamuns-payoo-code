console.log("login js is connected");

document.getElementById("login-btn").addEventListener("click", function () {
    //1-get the mobile number input
    const numberInput = document.getElementById("input-num");
    const contactNumber = numberInput.value;

    console.log(contactNumber);
    //2-get the pin input
    const pinInput = document.getElementById("input-pin");
    const pinNumber = pinInput.value;
    console.log(pinNumber);
    //3-match pin & mobile number
    if (contactNumber == "01521401025" && pinNumber == "0000") {
        //3-1 true:::>> alert> homepage
        alert("Login Successful");
        window.location.assign("./home.html");
    } else {
        //3-2 false:::>> alert> return 
        alert("Login Failed. Try Again");
    }

});