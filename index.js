const formElem = document.querySelector("#formElem");
const timeDownload = document.querySelectorAll(".time");
const progressBar = document.querySelector(".progress");
const linkOfDownload = document.querySelector(".download");

formElem.onsubmit = async (e) => {
    e.preventDefault();
    progress(formElem);

    fetch("upload.php", {
        method: "POST",
        body: new FormData(formElem),
    })
        .then((response) => {
            
            
            return response.text();
        })
        .then((text) => {
            console.log("Ответ: ", text.split("."));
            return text.split(".");
        })
        .then((arrTime) => {
            timeDownload.forEach((e, i) => {
                if (parseFloat(arrTime[i]) !== NaN) {
                    e.innerHTML = arrTime[i];
                } else e.innerHTML = arrTime[i];
            });
        });
};



function progress(formElem) {
    let interval = setInterval(function () {
        fetch("progress.php",  {
            method: "POST",
            body: new FormData(formElem),
        })
            .then((response) => {
                return response.text();
            })
            .then((progr) => {
                let prog = progr.split(" ")
                progressBar.setAttribute("value", prog[0])
                
                console.log("Progresssssss: ", prog);
                if(prog[1] == "progress=end") {
                    linkOfDownload.style.display= 'block';
                    clearInterval(interval);
                }
                else if(prog[0] == ''){
                    clearInterval(interval);
                }
            });
    }, 1000); 
}


