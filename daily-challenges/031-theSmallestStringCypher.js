const theSmallestStringCipher = (key, message) => {
  let i = 0,
    j = 0;
  let result = '';

  while (i < key.length || j < message.length) {
    if (i >= key.length) {
      result += message[j];
      j++;
    } else if (j >= message.length) {
      result += key[i];
      i++;
    } else {
      if (key[i] < message[j]) {
        result += key[i];
        i++;
      } else {
        result += message[j];
        j++;
      }
    }
  }

  return result;
};
