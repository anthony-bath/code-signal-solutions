//Link to the challenge: https://app.codesignal.com/challenge/rxfS7RZL72ZfbHxEn

const djSet = (lib, first, last) => {
  lib = lib.map(JSON.parse);

  const distances = Array(lib.length).fill(Number.MAX_VALUE);
  const queue = new Set(Array.from({ length: lib.length }, (_, i) => i));

  distances[first] = 0;

  while (queue.size) {
    let min = -1;

    for (const i of queue) {
      if (min === -1 || distances[i] < distances[min]) min = i;
    }

    for (let i = 0; i < lib.length; i++) {
      if (queue.has(i)) {
        const minToNextD = getDistance(lib[min], lib[i]);
        const firstToNextD = distances[min] + minToNextD;

        if (firstToNextD < distances[i]) distances[i] = firstToNextD;
      }
    }

    queue.delete(min);
  }

  return distances[last];
};

const getDistance = (t1, t2) => {
  const tempoD = Math.abs(t1.tempo - t2.tempo) ** 2;
  const keyD = t1.key !== t2.key ? 10 : 0;

  return tempoD + keyD;
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  Used Dijkstra's algorithm to solve. As each song is connected to every other
  song, the distance to each song from the first can be calculated initially.
  From there, we can visit each of the closest neighbors and update the
  distance to all other neighbors and repeat until all have been visited. The
  final distance in distances[last] will be the shortest distance from the
  first track to the last track.
*/
