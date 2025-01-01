function Longestword(word) {
    word = word.split(" ");
    let longi = word[0];
    console.log(word);
    for (let i = 1; i < word.length; i++) {
        if (word[i].length > longi.length) {
          longi = word[i];
        }
      
    }

    return longi;
  }

  const res = Longestword("I am the king");
  console.log(res);