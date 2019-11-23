$(document).ready(function(){
    
    let i = 1;
    function ConnectButton(){
        document.querySelector("#connect").click();
        console.log("Connect button clicked  " + i + " times"); 
        i++;
    }
    setInterval(ConnectButton,60000);

    console.log("UTSHAW");
}); 