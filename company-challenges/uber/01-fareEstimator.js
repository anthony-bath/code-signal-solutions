const fareEstimator = (
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) => {
  return cost_per_minute.map(
    (cpMin, i) => cpMin * ride_time + cost_per_mile[i] * ride_distance
  );
};
