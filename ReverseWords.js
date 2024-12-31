function ReverseWords(words) {
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
  
       
      let newresult = "";
      for (let i = result.length - 1; i >= 0; i--) {
        newresult += result[i];
      }
      return newresult;
     
  }
  const reversedWord = ReverseWords("Hello world javascript");
  console.log(reversedWord)
  