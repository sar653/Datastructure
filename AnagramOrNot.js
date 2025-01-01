function anagram(a, b) {
    a = a.split("");
    b = b.split("");
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
        }
      }
    }

    for (let i = 0; i < b.length - 1; i++) {
      for (let j = 0; j < b.length - 1 - i; j++) {
        if (b[j] > b[j + 1]) {
          [b[j], b[j + 1]] = [b[j + 1], b[j]];
        }
      }
    }
    a = a.join("");

    b = b.join("");
    return a === b;
  }

  const anagr = anagram("faraway", "farwaya");
  console.log(anagr);
