function visitorCounter(){
    fetch("https://xz0x4ha38k.execute-api.us-east-1.amazonaws.com/visitorCounter")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").innerHTML=body 
        })
}

