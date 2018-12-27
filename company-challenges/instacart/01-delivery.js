const delivery = (order, shoppers) => {
  const [customerDistance, receiveTime, lateTime] = order;
  const totalTime = receiveTime + lateTime;

  return shoppers.map(([shopperDistance, speed, shopTime]) => {
    const tripTime = (customerDistance + shopperDistance) / speed + shopTime;

    if (tripTime < receiveTime) return false;
    else return tripTime <= totalTime;
  });
};
