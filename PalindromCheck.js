function palindromeCheck(name) {
    for (let i = 0; i < name.length / 2; i++) {
      if (name[i] === name[name.length - 1 - i]) {
        return true;
      }
    }
    return false;
  }
  const palindrome = palindromeCheck("madama");
  console.log(palindrome);
