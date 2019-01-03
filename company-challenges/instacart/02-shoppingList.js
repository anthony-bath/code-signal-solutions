const shoppingList = items => {
  const exp = new RegExp(/(\d{1,}\.\d{1,2}|\d{1,})/g);

  let total = 0;
  let match;

  do {
    match = exp.exec(items);

    if (match) {
      total += parseFloat(match[0]);
    }
  } while (match);

  return total;
};
