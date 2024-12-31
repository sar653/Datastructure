function ReverseLettersButSamePosition(words) {
  let result = "";
  let reversedword = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      for (let j = reversedword.length - 1; j >= 0; j--) {
        result = result + reversedword[j];

      }
      reversedword=""
      result=result+" "
    } else {
      reversedword = reversedword + words[i];
    }
  }

  for (let i = reversedword.length - 1; i >= 0; i--) {
    result = result + reversedword[i]; }

     return result

   
}
const reversedWords = ReverseLettersButSamePosition("Hello world javascript");
console.log(reversedWords)
