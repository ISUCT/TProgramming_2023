function towerBuilder(nFloors) {
  return new Array(nFloors)
    .fill("")
    .map(
      (_, floor) =>
        " ".repeat(nFloors - 1 - floor) +
        "*".repeat(floor + 1) +
        "*".repeat(floor) +
        " ".repeat(nFloors - 1 - floor)
    );
}
