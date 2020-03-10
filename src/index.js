const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decodeL(letter){
    if (letter == "**********") return " ";
    let result = "";
    while(letter != ""){
  
        let bit  = letter.substring(0,2);
        if (bit != "00"){
            bit = (bit == "10")? ".": "-";
        } else bit = "";
        if (letter.length < 3) letter = "";
        else letter = letter.substring(2);
        result = result + bit;
    }
    return result;
  }
  function fromDotToString(dots = ""){
    if (dots == " ") return dots;
    if (dots in MORSE_TABLE) return MORSE_TABLE[dots];
    else return "#";
  }
  
  function decode(expr) {
    let result = "";
    while (expr != ""){
   //     alert(expr);
        let letter = "";
        if (expr.length < 11) letter = expr;
        else letter = expr.substring(expr.length - 10);
        letter = decodeL(letter);
        letter = fromDotToString(letter);
        result = letter + result;
        if (expr.length < 11) expr = "";
        else expr = expr.substring(0,expr.length - 10);
    }
    return result;
    // write your solution here
  }

module.exports = {
    decode
}