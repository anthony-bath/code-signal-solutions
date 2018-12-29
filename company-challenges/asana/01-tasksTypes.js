const tasksTypes = (deadlines, day) => {
  return deadlines.reduce(
    (a, c) => {
      if (c <= day) {
        a[T]++;
      } else if (c >= day + 1 && c <= day + 7) {
        a[U]++;
      } else {
        a[L]++;
      }

      return a;
    },
    [0, 0, 0]
  );
};

const [T, U, L] = [0, 1, 2];
