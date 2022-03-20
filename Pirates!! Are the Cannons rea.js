const cannonsReady = (gunners) =>
  Object.values(gunners).every((el) => el == "aye")
    ? "Fire!"
    : "Shiver me timbers!";
