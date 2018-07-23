function isNHINumber(nhiNumber){
    var nhiNumString = String(nhiNumber);
    if (!nhiNumString.match(/^([a-zA-Z]){3}([0-9]){4}?$/g)){
        return false;
    }
    var chars = nhiNumString.toLowerCase().match(/([a-zA-Z0-9])/g);
    var sum = 0;

    for (var i = 0; i < 6; i++){
        var char = chars[i];
        if (i < 3){
            var ascii = char.charCodeAt(0);
            if(ascii > 105){
                if (ascii > 111){
                    ascii = ascii - 2;
                }
                else {
                    ascii = ascii - 1;
                }
            }
            char = ascii - 96;
        }
        sum = sum + (char * (7 - i));
    }
    var checkSum = sum % 11;
    var checkDigit = 11 - checkSum;
    if (checkSum === 0){
        return false;
    }
    if (checkDigit === 10){
        checkDigit = 0;
    }
    return (Number(chars[6]) === checkDigit);
};