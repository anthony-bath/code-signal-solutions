/*
 The master launch sequence consists of several independent sequences for different systems. 
 Your goal is to verify that all the individual system sequences are in strictly increasing order. 
 In other words, for any two elements i and j (i < j) of the master launch sequence that belong 
 to the same system (having systemNames[i] = systemNames[j]), their values should be in strictly 
 increasing order (i.e. stepNumbers[i] < stepNumbers[j]).
 */

const launchSequenceChecker = (systemNames, stepNumbers) => {
  let lookup = new Map();

  for (let i = 0; i < systemNames.length; i++) {
    const system = systemNames[i];
    const step = stepNumbers[i];

    if (lookup.has(system)) {
      const lastStep = lookup.get(system);

      if (lastStep >= step) {
        return false;
      }
    }

    lookup.set(system, step);
  }

  return true;
};
