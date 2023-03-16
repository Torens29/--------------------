const formElem = document.querySelector("#formElem");
const timeDownload = document.querySelectorAll(".time");

formElem.onsubmit = async (e) => {
    e.preventDefault();

    fetch("upload.php", {
        method: "POST",
        body: new FormData(formElem),
    })
        .then((response) => {
            return response.text();
        })
        .then((text) =>{
            console.log('Ответ: ', text.split("."))
            return text.split(".")
        })
        .then(arrTime =>{
            timeDownload.forEach((e, i)=>{
                if(parseFloat(arrTime[i])!== NaN){
                   e.innerHTML = arrTime[i];
                }else 
                    e.innerHTML =  arrTime[i];
            })
        })
};
