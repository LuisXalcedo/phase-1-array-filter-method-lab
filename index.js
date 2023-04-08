function findMatching(drivers, arg) {
  return drivers.filter(
    (drivers) => drivers.toLowerCase() === arg.toLowerCase()
  );
}

function fuzzyMatch(drivers, arg) {
  return drivers.filter((driver) => driver.startsWith(arg));
}

function matchName(drivers, arg) {
  return drivers.filter(({ name, hometown }) => name === arg);
}
