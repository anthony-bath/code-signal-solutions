const R = new Map(
  [...Array(43).keys()].map(i => [`R${i < 10 ? '0' : ''}${i}`, 0])
);

const cpuEmulator = subroutine => {
  let currentIndex = 0;

  while (currentIndex < subroutine.length) {
    const command = subroutine[currentIndex];

    if (command === 'NOP') {
      currentIndex += 1;
      continue;
    }

    const [func, args] = command.split(' ');
    const [arg1, arg2] = args.split(',');

    currentIndex = process(func, arg1, arg2, currentIndex);
  }

  return `${R.get('R42')}`;
};

const process = (func, arg1, arg2, index) => {
  switch (func) {
    case 'MOV':
      if (arg1.startsWith('R')) {
        R.set(arg2, R.get(arg1));
      } else {
        R.set(arg2, parseInt(arg1));
      }

      return index + 1;

    case 'JZ':
      if (R.get('R00') === 0) {
        return parseInt(arg1) - 1;
      }

      return index + 1;

    case 'ADD': {
      let result = (R.get(arg1) + R.get(arg2)) % 2 ** 32;

      if (result < 0) result += 2 ** 32;

      R.set(arg1, result);
      return index + 1;
    }

    case 'DEC':
      {
        const current = R.get(arg1);
        R.set(arg1, current === 0 ? 2 ** 32 - 1 : current - 1);
        return index + 1;
      }
      break;

    case 'INC':
      {
        const current = R.get(arg1);
        R.set(arg1, current === 2 ** 32 - 1 ? 0 : current + 1);
        return index + 1;
      }
      break;

    case 'JMP':
      return parseInt(arg1) - 1;

    case 'INV':
      R.set(arg1, R.get(arg1) ^ (2 ** 32 - 1));
      return index + 1;
  }
};
