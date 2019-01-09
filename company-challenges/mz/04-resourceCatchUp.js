const resourceCatchUp = (logOut, logIn) => {
  let [startTime, startResource] = logOut;
  let [endTime, endResource] = logIn;

  startTime = Math.ceil(startTime / 3600) * 3600;
  endTime = Math.floor(endTime / 3600) * 3600;

  const totalHours = 1 + (endTime - startTime) / 3600;

  return (startResource - endResource) / totalHours;
};
