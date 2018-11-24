//Link to the challenge: https://app.codesignal.com/challenge/D7xcKDseTa2gLondg

const masterVsFighters = (fighters, [mHealth, mAttack, mResistance]) => {
  let hitsByMaster = [];
  let hitsByFighters = [];
  let fightersDefeated = 0;

  fighters = fighters.map(t => ({ ...fighterTypes[t] }));

  for (let fighter of fighters) {
    while (mHealth > 0) {
      const hitByFighter = fighter.attack - mResistance;
      hitsByFighters.push(hitByFighter);
      mHealth -= hitByFighter;

      if (mHealth <= 0) {
        break;
      }

      const hitByMaster = mAttack - fighter.resistance;
      hitsByMaster.push(hitByMaster);
      fighter.health -= hitByMaster;

      if (fighter.health <= 0) {
        fightersDefeated++;
        break;
      }
    }
  }

  return [
    mHealth > 0 ? 'Master' : 'Fighters',
    `${fightersDefeated}`,
    `${fighters.length - fightersDefeated}`,
    `${Math.max(mHealth, 0)}`,
    `${hitsByFighters.length}`,
    `${hitsByMaster.length}`,
    average(hitsByFighters).toFixed(2),
    average(hitsByMaster).toFixed(2),
  ];
};

const average = arr =>
  arr.length === 0
    ? 0
    : Math.round((100 * arr.reduce((a, c) => (a += c), 0)) / arr.length) / 100;

const fighterTypes = {
  a: {
    health: 5,
    attack: 6,
    resistance: 2,
  },
  b: {
    health: 6,
    attack: 8,
    resistance: 2,
  },
  g: {
    health: 8,
    attack: 6,
    resistance: 5,
  },
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  The `average` helper function determines the average of the given array to 2
  decimal places, or 0 for a 0 length array.

  The `fighterTypes` object is a lookup as the input to the challenge function
  is given as an array of 'a', 'b' and 'g' values.

  The challenge function then simply converts the fighters to an array of
  fighter objects before iterating over them, logging hits, defeats and the
  decline of the Master's health. The data is then collated and returned in the
  expected format.
*/
