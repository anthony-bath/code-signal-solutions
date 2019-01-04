const proCategorization = (pros, preferences) => {
  const lookup = new Map();

  preferences.forEach((prefList, i) => {
    prefList.forEach(pref => {
      if (lookup.has(pref)) lookup.set(pref, [...lookup.get(pref), pros[i]]);
      else lookup.set(pref, [pros[i]]);
    });
  });

  return Array.from(lookup.keys())
    .sort()
    .map(key => [[key], lookup.get(key)]);
};
