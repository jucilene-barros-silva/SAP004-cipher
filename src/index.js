import cipher from './cipher.js';


function parametersEncode (event){
    event.preventDefault();
    let nOffset = document.getElementById("offset").valueAsNumber;
    let message = document.getElementById("write-text").value.toUpperCase();

    document.getElementById("result-text").innerHTML = cipher.encode(nOffset,message);
}

function parametersDecode (event){
    event.preventDefault();
    let nOffset = document.getElementById("offset").valueAsNumber;
    let message = document.getElementById("write-text").value.toUpperCase();

    document.getElementById("result-text").innerHTML = cipher.decode(nOffset,message);
}

document.getElementById("btn-cipher").addEventListener("click", parametersEncode);
document.getElementById("btn-decipher").addEventListener("click", parametersDecode);

document.getElementById("btn-clear").addEventListener("click",function clear(){
    document.getElementById("write-text").value = "";
    const result = document.getElementById("result-text").value = "";
} );

document.getElementById("btn-copy").addEventListener("click",function copy(){
    const Copy = document.getElementById("result-text").select();
    document.execCommand("Copy");
});
