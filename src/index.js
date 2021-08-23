const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let result = "";
  for (let i = 0; i < expr.length / 10; i++) {
    let char = expr.slice(i * 10, 10 + i * 10);
    if (char === "**********") {
      result += " ";
    } else {
      let Morze = "";
      for (let j = 0; j < 5; j++) {
        let elem = char.slice(j * 2, j * 2 + 2);
        if (elem === "00") {
          continue;
        }
        if (elem === "10") {
          Morze += ".";
        }
        if (elem === "11") {
          Morze += "-";
        }
      }
      result += MORSE_TABLE[Morze];
    }
  }
  return result;
}

module.exports = {
  decode,
};
