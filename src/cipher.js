const cipher = {
  encode: function (nOffset, message) {
    if (typeof (nOffset) != typeof (0)) {
      throw new TypeError("Insira um número");
    } else if (typeof (message) != typeof ("a")){
      throw new TypeError("Insira sua mensagem");
    }
  
    let finalResultCipher = ""

    for (let i = 0; i <message.length; i++){
      const letterCodeAscChipher = (((message[i].charCodeAt(0) - 65 + Number(nOffset)) % 26) + 65);
      const resultCipher = String.fromCharCode(letterCodeAscChipher);
      finalResultCipher += resultCipher;
    }

    return finalResultCipher; 
  },

  decode: function (nOffset, message) {

    let finalResultDecipher = ""

    for (let i = 0; i <message.length; i++){
      const letterCodeAscDechipher = (((message[i].charCodeAt(0) - 90 - Number(nOffset)) % 26) + 90);
      const resultDecipher = String.fromCharCode(letterCodeAscDechipher);
      finalResultDecipher += resultDecipher;
    }
    return finalResultDecipher;
  },
    
};

export default cipher;


