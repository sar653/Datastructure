function issort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }

    return true;
  }

  const sorted = issort([1, 2, 3, 5, 6]);
  console.log(sorted);