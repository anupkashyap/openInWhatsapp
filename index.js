if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration=>{
        console.log("Worker registered");
        console.log(registration);
    }).catch(error=>{
        console.log("Worker error");
        console.log(error);
    })
}

var phoneNumber="";
function onNumberInput(){
    var phoneNumber = document.getElementById("numberField").value;
    console.log(phoneNumber);
}

function onButtonClick(){
    var phoneNumber = document.getElementById("numberField").value;
    console.log(phoneNumber);
    var baseurl="whatsapp://send/?phone=";
    var url=baseurl.concat(phoneNumber);
    console.log(url);
      window.open(url);
}