function removeduplicate(array, dup) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      if (!dup.includes(array[i])) {
        result.push(array[i]);
      }
    }

    return result;
  }
  const duplicate = removeduplicate([1, 2, 3, 4, 5, 6], [1, 2]);
  console.log(duplicate);