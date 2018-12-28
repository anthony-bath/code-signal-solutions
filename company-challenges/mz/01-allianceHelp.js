const allianceHelp = (t, allianceSize) => {
  const reduction =
    t >= 100 * BOOST_RATE * MIN_BOOST ? Math.floor(t * BOOST_RATE) : MIN_BOOST;

  return Math.max(0, t - Math.min(MAX_HELP, allianceSize) * reduction);
};

const MAX_HELP = 10;
const BOOST_RATE = 0.1;
const MIN_BOOST = 60;
