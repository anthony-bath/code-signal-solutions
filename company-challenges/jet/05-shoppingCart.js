const shoppingCart = requests => {
  let cart = {};

  requests.forEach(req => {
    const [action, item, change] = req.split(' : ');

    switch (action) {
      case 'add':
        cart[item] = 1;
        break;

      case 'remove':
        delete cart[item];
        break;

      case 'quantity_upd':
        cart[item] = eval(`${cart[item]}${change}`);
        break;

      case 'checkout':
        cart = {};
        break;
    }
  });

  return Object.keys(cart).map(k => `${k} : ${cart[k]}`);
};
