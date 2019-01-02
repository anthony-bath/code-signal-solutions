const smartAssigning = (names, statuses, projects, tasks) => {
  const people = [];

  for (let i = 0; i < statuses.length; i++) {
    if (!statuses[i]) {
      people.push({
        name: names[i],
        projects: projects[i],
        tasks: tasks[i],
      });
    }
  }

  return people.sort(availabilityComparer).shift().name;
};

const availabilityComparer = (a, b) => {
  if (a.tasks > b.tasks) return 1;
  else if (b.tasks > a.tasks) return -1;
  else return a.projects - b.projects;
};
