const newRoadSystem = roadRegister => {
  for (let i = 0; i < roadRegister.length; i++) {
    const outgoing = roadRegister[i].filter(r => r).length;
    let incoming = 0;

    for (let j = 0; j < roadRegister[i].length; j++) {
      if (roadRegister[j][i]) incoming++;
    }

    if (incoming != outgoing) return false;
  }

  return true;
};
