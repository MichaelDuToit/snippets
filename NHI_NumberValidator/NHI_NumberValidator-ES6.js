class NHINumber {
    constructor(nhi_number){
        this.nhi_number = String(nhi_number);
    }
    static validate(nhi_number){
        if (!nhi_number.match(/^([a-zA-Z]){3}([0-9]){4}?/g)){
            return false;
        }
        let chars = nhi_number.toLowerCase().match(/([a-zA-Z0-9])/g);
        let sum = 0;
        for (let i = 0; i < 6; i++){
            let char = chars[i];
            if (i < 3){
                let ascii = char.charCodeAt(0);
                if (ascii > 105){
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
        const checkSum = sum % 11;
        let checkDigit = 11 - checkSum;
        if (checkSum === 0){
            return false;
        }
        if (checkDigit === 10){
            checkDigit = 0;
        }
        return (Number(chars[6]) === checkDigit);
    }
}