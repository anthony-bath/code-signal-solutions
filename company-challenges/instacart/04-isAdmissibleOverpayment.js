const isAdmissibleOverpayment = (prices, notes, x) => {
  let diff = 0;

  for (let i = 0; i < prices.length; i++) {
    let priceDiff = 0;
    let storePrice;

    if (notes[i].includes('Same')) continue;
    else {
      let [pct] = notes[i].replace('%', '').split(' ');
      pct /= 100;

      if (/higher/.test(notes[i])) {
        storePrice = Math.round((100 * prices[i]) / (1.0 + pct)) / 100;
        priceDiff = Math.floor((prices[i] - storePrice) * 100) / 100;
        if (priceDiff <= 0.0) priceDiff = 0.01;
      } else if (/lower/.test(notes[i])) {
        storePrice = Math.round((100 * prices[i]) / (1.0 - pct)) / 100;
        priceDiff = Math.floor((prices[i] - storePrice) * 100) / 100;
      }

      diff += priceDiff;
    }
  }

  return diff <= x;
};
