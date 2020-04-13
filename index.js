import cipher from './cipher.js';

function parametersEncode (event){
    event.preventDefault();
    let nOffset = document.getElementById("offset").valueAsNumber;
    let message = document.getElementById("write-text").value.toUpperCase();

    document.getElementById("result").innerHTML = cipher.encode(nOffset,message);
}

function parametersDecode (event){
    event.preventDefault();
    let nOffset = document.getElementById("offset").valueAsNumber;
    let message = document.getElementById("write-text").value.toUpperCase();

    document.getElementById("result").innerHTML = cipher.decode(nOffset,message);
       
}

document.getElementById("btnCipher").addEventListener("click", parametersEncode);
document.getElementById("btnDecipher").addEventListener("click", parametersDecode);

//Função para limpar e copiar não implementada
/*function clearResult (event){
    event.preventDefault();
    let textResult = document.getElementById("result").innerHTML = cipher.decode(nOffset,message);
    textResult.select();
    document.execCommand("delete")
}



function copyResult (event){
    event.preventDefault();
    document.getElementById().select();
    document.execCommand("copy");
}

document.getElementById("btnClear").addEventListener("click", clearResult);
document.getElementById("btnCopy").addEventListener("click", copyResult);*/
