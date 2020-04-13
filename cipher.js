const cipher = {
  encode: function (nOffset, message) {
    if (typeof (nOffset) != typeof (0)) {
      throw new TypeError();
    } else if (typeof (message) != typeof ("a")){
      throw new TypeError();
    }
  
    let finalResultCipher = ""

    for (let i = 0; i <message.length; i++){
      let codigoDaLetraAscChipher = (((message[i].charCodeAt(0) - 65 + Number(nOffset)) % 26) + 65);
      let resultCipher = String.fromCharCode(codigoDaLetraAscChipher);
      finalResultCipher += resultCipher;
    }

    return finalResultCipher; 
  },

  decode: function (nOffset, message) {

    let finalResultDecipher = ""

    for (let i = 0; i <message.length; i++){
      let codigoDaLetraAscDechipher = (((message[i].charCodeAt(0) - 90 - Number(nOffset)) % 26) + 90);
      let resultDecipher = String.fromCharCode(codigoDaLetraAscDechipher);
      finalResultDecipher += resultDecipher;
          }
    return finalResultDecipher;
  },
    
};

export default cipher;


