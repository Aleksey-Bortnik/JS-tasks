function sum() {
  const value = Object.values(arguments).reduce((acc, next) => {
    if (typeof next === "number") {
      return acc + next;
    }
    return acc;
  }, 0);
  return value;
}

sum("324", 1, 2, 3, [], "ffffff");
