class VigenèreCipher {
    constructor(key, abc) {
        this.encode = function (str) {
            //split the Lstring into an array
            let lowerStr = str.toLowerCase()
            let arr = abc.split("");
            let keyValue = [];

            for (let i = 0; i < key.length; i++) {
                //finding the letter(key) value and push it to key value
                keyValue.push(arr.indexOf(key[i]));
            }
            let redacted = "";
            let pointer = 0;
            for (let i = 0; i < lowerStr.length; i++) {
                if (arr.includes(lowerStr[i])) {
                    let shift = arr.indexOf(lowerStr[i]) + keyValue[pointer];

                    if (shift >= 26) {
                        redacted += arr[shift - 26];
                    } else {
                        redacted += arr[shift];
                    }

                } else {

                    redacted += lowerStr[i];
                }

                pointer = (pointer + 1) % keyValue.length;

            }

            //console.log(keyValue);
            console.log(`redacted: ${redacted}`);
            return redacted
        };
        this.decode = function (str) {
            let lowerStr = str.toLowerCase()
            let arr = abc.split("");
            let keyValue = [];

            for (let i = 0; i < key.length; i++) {
                //finding the letter(key) value and push it to key value
                keyValue.push(arr.indexOf(key[i]));
            }
            let decoded = "";
            let pointer = 0;
            for (let i = 0; i < lowerStr.length; i++) {

                if (arr.includes(lowerStr[i])) {
                    let shift = arr.indexOf(lowerStr[i]) - keyValue[pointer];
                    if (shift < 0) {
                        decoded += arr[26 - Math.abs((arr.indexOf(lowerStr[i]) - keyValue[pointer]))];
                    } else {
                        decoded += arr[Math.abs((arr.indexOf(lowerStr[i]) - keyValue[pointer]))];
                    }


                } else {

                    decoded += lowerStr[i];

                }


                pointer = (pointer + 1) % keyValue.length;

            }

            console.log(`decode: ${decoded}`);
            return decoded
        };
    };
}




let abc = "abcdefghijklmnopqrstuvwxyz";


function display() {

    const message = document.getElementById('message').value.toString();
    const keycode = document.getElementById('key').value.toString();
    const type = document.querySelector('.type').value
    const messagOutPut = document.querySelector('.messageOutPut')
    const userKey = document.querySelector('.userkey')
    const rap = document.querySelector('.rap')
    const hide = document.querySelector('.hide')


    let c = new VigenèreCipher(keycode, abc)
    if (type == 'en') {
        messagOutPut.innerHTML = `<span>Message:</span> ${c.encode(message)}`
        userKey.innerHTML = `<span>Encryption kEY:</span> ${keycode}`
        rap.style.display = 'block'
        hide.style.display = 'none'

    } else {
        messagOutPut.innerHTML = c.decode(message)
        userKey.innerHTML = `<span>Encryption kEY:</span> ${keycode}`
    }


}








